require "should"
BigBuffer = require "../lib/bigBuffer.coffee"
fs = require "fs"
KB = 1024
MB = 1024 * KB
bb = null
testFile = "./2G"
describe "test bigbuffer",()->
    it "create test 2G file",(done)->
        KB = 1024
        MB = 1024 * KB
        GB = 1024 * MB
        filename = testFile
        size = 2* 1024 * MB
        str = new Array(MB).join("0123456789")
        buff = new Buffer(str)
        fd = fs.openSync filename,"w"    
        while size > 0
            fs.writeSync fd,buff,0,str.length,null
            size -= str.length
        fs.closeSync fd
        done()
    it "read big buffer from file",(done)->
        BigBuffer.fromFile testFile,(err,_bb)->
            bb = _bb
            console.assert not err
            console.assert bb.length
            done()
    it "should be the same size",(done)->
        stat = fs.statSync(testFile)
        bb.length.should.be.equal(stat.size)
        done()    
    it "slice test",(done)->
        start = Math.floor(303*bb.blockSize/10)*10
        #start = bb.blockSize-1 
        end = start+10
        console.log start/MB
        sliceString = bb.slice(start,end).toString()
        for index in [0..9]
            String.fromCharCode(bb.byteAt(start+index)).should.equal(sliceString[index])
        sliceString.should.equal("0123456789")
        done()

after (done)->
    fs.unlinkSync testFile
    done()