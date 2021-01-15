# node-line-reader-sync
An sync version of nodejs line reader
Only support \n nor \r\n currently.

```javascript
LineReaderSync = require("line-reader-sync")
lrs = new LineReaderSync("path")
while(true){
  var line = lrs.readline()
  if(line === null){
    console.log("EOF");
  }else{
    console.log("line without \n",line)
  }
  
}
//or
lrs.toLines()
//["line1","line2"...]
```
