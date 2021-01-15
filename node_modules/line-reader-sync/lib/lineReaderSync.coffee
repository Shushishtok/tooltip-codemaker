BigBuffer = require "bigbuffer"
class LineReaderSync
    constructor:(path)->
        @bb = BigBuffer.fromFileSync path
        @index = 0
    readline:()->
        
        lineCode = "\n".charCodeAt(0)
        bb = @bb
        if @index is bb.length
            return null
        if bb.byteAt(@index) is lineCode
            @index += 1
            return ""
        end = @index
        while end < bb.length
            if lineCode is bb.byteAt(end)
                result = bb.slice(@index,end).toString()
                @index = end+1
                return result
            end = end+1
        # EOF
        result = bb.slice(@index,bb.length).toString()
        @index = bb.length
        return result
    toLines:()->
        lines = []
        _index = @index
        @index = 0
        while true
            line = @readline()
            if line is null
                @index = _index
                return lines
            lines.push line
        
module.exports = LineReaderSync