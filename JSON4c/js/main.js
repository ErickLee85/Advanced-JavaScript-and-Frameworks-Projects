// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);
  
    } // end if
} // end function

var display = (x) => {
    console.log(x);
    document.getElementById("roomName").innerHTML = hotelInfo[x]["name"];
    document.getElementById("desc").innerHTML = hotelInfo[x]["description"];
    document.getElementById("weekday").innerHTML = hotelInfo[x]["cost"]["weekday"];
    document.getElementById("weekend").innerHTML = hotelInfo[x]["cost"]["weekend"];
    document.getElementById("photo").src = hotelInfo[x]["photo"];

    details = "";
    // for (var i = 0; i < hotelInfo[x]["details"].length; i++) {
    //     details += "<p>" + hotelInfo[x]["details"][i] + "</p>";
    // }

    hotelInfo[x]["details"].forEach(element => {
        details += "<p>" + element + "</p>";
    });
    document.getElementById("details").innerHTML = details;

 
}