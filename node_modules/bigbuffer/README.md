node-bigbuffer
==============

Using list of buffer to construct a BigBuffer to break through nodejs's buffer size limitation (1G)


# Test
need install mocha
```bash
npm test
```
# Usage
```coffee-script
BigBuffer.fromFile "bigFile",(err,bb)->
    console.assert bb.length # is buffer length
    # get a normal buffer
    buffer = bb.slice(0,10)
    # get byte at index
    byte = bb.byteAt(1000)
```