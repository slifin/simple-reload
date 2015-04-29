#!/usr/bin/env node

var nativeMessage = require('./index');


var output = new nativeMessage.Output();
output.write(JSON.parse('hello world'));
output.pipe(process.stdout);