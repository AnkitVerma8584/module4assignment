(function(window) {

    var speakWord = "Hey buddy how are you";
    var greetspeaker = {};
    greetspeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    window.greetspeaker = greetspeaker;
})(window);
