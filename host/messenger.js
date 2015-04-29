

var fs = require('fs');
var nativeMessage = require('./chrome-native-messaging/index');
var output = new nativeMessage.Output();
output.write('hello');

watcher=fs.watch('./watch.txt',{},function(){
	output.write('world');
});
watcher.on('change',function(){
	output.write('world');
});	

// setInterval(function(){
// 	output.write('world');
// },1000);

// fs.watchFile('./watch.txt', function (curr, prev) {
// 	output.write('world');
// });


process.stdin
.pipe(output)
.pipe(process.stdout);

