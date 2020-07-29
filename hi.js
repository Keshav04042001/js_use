(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
/*(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);

(function(window){
	var hellospeaker = new Object();
	hellospeaker.speak = function(names){
		console.log("Hello "+names)
	}
	window.hellospeaker = hellospeaker;
})(window);
*/