var port = chrome.runtime.connectNative('com.github.slifin.simple.reload');
port.onMessage.addListener(function(msg) {
  console.log("Received" + msg);
});
port.onDisconnect.addListener(function() {
  console.log("Disconnected");
});


function refresh(){
	chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
		chrome.tabs.reload(arrayOfTabs[0].id);
	});
}
