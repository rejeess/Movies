
var pageDisplay = document.getElementById("demo");
var btn         = document.getElementById("nowPlaying");
var btn1        = document.getElementById("comingSoon");
var btn2        = document.getElementById("all");
var api         = "http://api.kendomobilebook.com/api/Movies/GetMovieList/?listType=";


btn.addEventListener("click", function () {
    ajaxcall(0);
});

btn1.addEventListener("click", function () {
    ajaxcall(1);
});

btn2.addEventListener("click", function () {
    ajaxcall(2);
});

function ajaxcall(type) {
    var urlRequest = new XMLHttpRequest();
    urlRequest.open('GET', api + type);
    urlRequest.onload = function () {
        //console.log(urlRequest.responseText);
        var movieData = JSON.parse(urlRequest.responseText);
        //console.log(movieData[0]);
        loadHTML(movieData);
    };
    urlRequest.send();
}


function loadHTML(data) {

   
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        // htmlString += "<img class= 'movie-img' src=" + data[i].Image + "/>" + "<h4 id='mov-name'>" + data[i].Name + "</h4>";
        htmlString += "<img class= 'movie-img' src=" + data[i].Image + " />" + "<h4 id='mov-name'>" + data[i].Name + "</h4>";
        htmlString += "<p class='mov-text'>" + data[i].Genre + "," + " " + data[i].Length + " " + "Mins" + "  " + data[i].Rating + "</p>";
        htmlString += "<p class='mov-text'>" + data[i].LeadStars + "</p>";

    }
    console.log(htmlString);
    // pageDisplay.insertAdjacentHTML(htmlString); This line was creating the issue .
    pageDisplay.innerHTML=htmlString;
}
