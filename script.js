


 function copyTheField(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log("Text copied to clipboard");
        alert(`text ${text} copied to the clipboard`)
    }).catch(err => {
        console.error("Error in copying text: ", err);
    });
}

// Event listener for the button
document.getElementById("copyButton").addEventListener("click", function() {
    const text = document.getElementById("inputFieldText").value;
    copyTheField(text);
});