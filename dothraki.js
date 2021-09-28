var txtInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translate");
var outputEl=document.querySelector("#output");

var serverURL="ttps://api.funtranslations.com/translate/dothraki.json";

function getTransalationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
console.log("error occured", error)
alert("something is wrong with server, try after sometime");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTransalationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputEl.innerText = translatedText;
           

            
        })

        .catch(errorHandler)
        gotSong.play();
};

btnTranslate.addEventListener("click", clickHandler)