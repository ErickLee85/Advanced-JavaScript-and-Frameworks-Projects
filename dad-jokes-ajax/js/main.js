const xhr = new XMLHttpRequest();
xhr.responseType = "text";

xhr.open("GET", "https://dad-jokes.p.rapidapi.com/random/joke", true);
xhr.setRequestHeader("X-RapidAPI-Key", "1aed881129msh0e4e702933d3b57p1d0a71jsnaba2c0d6b2f8");
xhr.setRequestHeader("X-RapidAPI-Host", "dad-jokes.p.rapidapi.com");

var dadJoke;

xhr.onload = function() {
    if(xhr.status === 200) {
        dadJoke = JSON.parse(xhr.responseText);
        document.getElementById("jokeSetup").innerHTML = dadJoke["body"][0]["setup"];
    }
}

var punchLine = () => {
    document.getElementById("jokePunchLine").innerHTML = dadJoke["body"][0]["punchline"];
}


 
xhr.send();

