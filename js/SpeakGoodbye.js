// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

document.addEventListener('DOMContentLoaded', function () {
    // STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE


    // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    var byeSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);

            // Append DOM Element
            var $listNames = document.querySelector('#listNames');
            var listEl = document.createElement('li');
            listEl.textContent += speakWord + " " + name;

            if ($listNames !== null) {
                $listNames.appendChild(listEl);
            }
        }
    }

    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";

    // STEP 8: Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    // function speak(name) {
    //     console.log(speakWord + " " + name);
    // }

    // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
    // 'byeSpeaker' on the global scope as well.
    window.byeSpeaker = byeSpeaker;
});