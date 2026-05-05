function fancifyMyText() {
    alert("Hello, world!");
    document.getElementById("text_area").style.fontSize="24pt";
}

function modifyStyle() {
    if (document.getElementById("fancy_shmancy_btn").checked) {
        alert("Style was modified!");
        document.getElementById("text_area").style.fontWeight="bold";
    }
    else {
        document.getElementById("text_area").style.fontWeight="normal";
    }
}
