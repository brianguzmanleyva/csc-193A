function fancifyMyText() {

    //Create an alert 
    //When bigger button clicked, changed font to 24pt
    alert("Hello, world!");
    document.getElementById("text_area").style.fontSize="24pt";
}

function modifyStyle() {

    //When FancyShmancy button clicked, change text to bold, blue color, and underline
    if (document.getElementById("fancy_shmancy_btn").checked) {
        alert("Style was modified!");
        document.getElementById("text_area").style.fontWeight="bold";
        document.getElementById("text_area").style.color="blue";
        document.getElementById("text_area").style.textDecoration="underline";
    }

    //When BoringBetty button clicked, change text to default
    else {
        document.getElementById("text_area").style.fontWeight="normal";
        document.getElementById("text_area").style.color="white";
        document.getElementById("text_area").style.textDecoration="none";
        document.getElementById("text_area").style.textTransform="lowercase";
    }
}

function mooChange() {

    //Make text uppercase
    var input_text = document.getElementById("text_area");
    var upper_text = input_text.value.toUpperCase();

    //Add -MOO to last word of each sentence
    var parts = upper_text.split(".");
    upper_text = parts.join("-MOO");
    input_text.value = upper_text;
}