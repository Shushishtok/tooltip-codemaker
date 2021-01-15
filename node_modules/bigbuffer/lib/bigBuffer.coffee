fs = require "fs"
class BigBuffer
    @fromFile:(path,callback)->
        try
            callback null,@fromFileSync(path)
        catch e
            callback e
    @fromFileSync:(path)->
        KB = 1024
        bb = new BigBuffer()
        fd = fs.openSync path,"r"
        buffer = new Buffer(bb.blockSize)
        total = 0
        mayBeTotal = 0
        while true
            howManyRead = fs.readSync fd,buffer,0,buffer.length,null
            if not howManyRead or howManyRead is 0
                break
            oldLength = bb.length
            #console.log "should increase",howManyRead
            total += howManyRead
            bb.write buffer,0,howManyRead
            #console.log "R vs S",howManyRead,bb.length - oldLength,bb.length/KB
            #console.assert howManyRead is bb.length - oldLength
            mayBeTotal += bb.length - oldLength
        fs.closeSync fd
        return bb
    constructor:()->
        @blocks = []
        @blockSize = 256 * 1024
        @count = 0
        @lastBlockLength = 0
        @__defineGetter__ "length",()=>
            if @blocks.length is 0
                return 0
            return (@blocks.length-1)*@blockSize+@lastBlockLength
        @__defineSetter__ "length",(value)=>
            if value < 0
                throw new Error 
            @blocks.length = Math.ceil(value/@blockSize)
            for block,index in @blocks
                if not block
                    @blocks[index] = new Buffer(@blockSize)
            @lastBlockLength = ((value-1)%@blockSize)+1
            #console.log @length,"after set",@blocks.length,value
    free:()->
        @blocks.length = 0
        @lastBlockLength = 0
    _writeBlock:(blockIndex,offset,buffer)->
        block = @blocks[blockIndex]
        buffer.copy block,offset
    blockIndexByByteOffset:(index)->
        return Math.floor(index/@blockSize)
    offsetWithinBlock:(index)->
        return index%@blockSize
    
    write:(buffer,offset,length)->
        if not buffer
            throw new Error "Write request a Buffer as first parameter"
        offset = offset or 0
        length = length or buffer.length
        if offset+length > buffer.length
            throw new Error "Write buffer params out of index"
        start = @length
        bufferStart = offset
        # allocate buffer
        #console.log "before add",@length,length
        @length += length
        #console.log "after add",@length
        while true
            howMany = @blockSize - @offsetWithinBlock(start)
            if howMany >= length - bufferStart
                howMany = length - bufferStart
                toBreak = true
            partToWrite = buffer.slice(offset,offset+length)
            @_writeBlock @blockIndexByByteOffset(start)
                ,@offsetWithinBlock(start)
                ,partToWrite
            if toBreak
                break
            bufferStart += howMany
            start += howMany
        return this
    slice:(start,end)->
        length = end-start
        if start > end
            throw new Error "start should less than end"
        if end > @length
            throw new Error "Index out of range"
        if start < 0 or end <= 0
            throw new Error "Invalid Offset or Index"
        buffers = []
        while start < end
            howMany = @blockSize - @offsetWithinBlock(start)
            if howMany > end - start
                howMany = end - start
            
            block = @blocks[@blockIndexByByteOffset(start)]
            buffer = block.slice(@offsetWithinBlock(start),@offsetWithinBlock(start)+howMany)
            buffers.push buffer
            start+=howMany
        return Buffer.concat(buffers,length)
    byteAt:(index)->
        if index >= @length
            throw new Error "Index Error"
        blockIndex = Math.floor(index/@blockSize)
        if blockIndex >= @blocks.length
            throw new Error "Range Error"
        block = @blocks[blockIndex]
        tailIndex = index%@blockSize
        return block[tailIndex]
    toBuffer:()->
        return Buffer.concat @blocks,@length
module.exports = BigBuffer