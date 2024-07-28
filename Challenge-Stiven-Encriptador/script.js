function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
}

function copyToClipboard() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}
