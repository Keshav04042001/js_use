(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();

/*
(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
(function(){
	var names = ["keshav","john","mia","jai","bhupat","rajendra","banwari"]
	for (i=0;i<names.length;i+=1)
	{
		var frst_let = names[i].charAt(0).toLowerCase();
		if(frst_let == "j"){
			byespeaker.speak(names[i]);
		}
		else{
			hellospeaker.speak(names[i]);
		}
	}
})();
*/