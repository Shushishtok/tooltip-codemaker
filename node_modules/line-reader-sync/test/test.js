require("coffee-script")
LineReaderSync = require("../lib/lineReaderSync.coffee")
lrs = new LineReaderSync("./testFile") 
while(true){
    var line = lrs.readline()
    if(line === null){
	console.log("EOF");
	break;
    }else{
	console.log("line without \\n",line)
    }
}
console.log(lrs.toLines())
