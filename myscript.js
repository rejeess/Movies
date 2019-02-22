
var pageDisplay = document.getElementById("demo");
var btn         = document.getElementById("nowPlaying");
var btn1        = document.getElementById("comingSoon");
var btn2        = document.getElementById("all");
var movieMore   = document.getElementsByClassName("movie-data");
var api         = "http://api.kendomobilebook.com/api/Movies/GetMovieList/?listType=";
var apiMovie    = "http://api.kendomobilebook.com/api/Theater/Get/?movieId=";


//http://api.kendomobilebook.com/api/Theater/Get/?movieId=1

btn.addEventListener("click", function () {
    document.getElementById("nowPlaying").style.background= "darkorange";
    ajaxcall(0);
});

btn1.addEventListener("click", function () {
    document.getElementById("comingSoon").style.background= "darkorange";
    ajaxcall(1);
});

btn2.addEventListener("click", function () {
    document.getElementById("all").style.background= "darkorange";
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

movieMore.addEventListener("click", function () {
  ajaxcallMovDetails();
});

function loadMovieHTML(data) {
    var htmlMovieString = "";

    for (i = 0; i < data.length; i++) {
        // htmlString += "<img class= 'movie-img' src=" + data[i].Image + "/>" + "<h4 id='mov-name'>" + data[i].Name + "</h4>";
        htmlMovieString += "<img class = 'mov-moreDetails' class= 'movie-img' src=" + data[i].Image + " />" + "<h4 id='theatre-name'>" + data[i].Name + "</h4>";
        htmlMovieString += "<p class = 'mov-moreDetails' class='mov-text'>" + data[i].Address + "," + " </p>";

    }
    console.log(htmlMovieString);yield 
    // pageDisplay.insertAdjacentHTML(htmlString); This line was creating the issue .
    pageDisplay.innerHTML=htmlMovieString;
}

function ajaxcallMovDetails(type) {
    var urlRequest2 = new XMLHttpRequest();
    urlRequest2.open('GET', apiMovie + type);
    urlRequest2.onload = function () {
        var movieData = JSON.parse(urlRequest2.responseText);
        loadHTML(movieData);
    };
    urlRequest2.send();
}

// function loadHTML(data) {

   
//     var htmlString = "";

//     for (i = 0; i < data.length; i++) {
//         // htmlString += "<img class= 'movie-img' src=" + data[i].Image + "/>" + "<h4 id='mov-name'>" + data[i].Name + "</h4>";
//         htmlString += "<img class= 'movie-img' src=" + data[i].Image + " />" + "<h4 id='mov-name'>" + data[i].Name + "</h4>";
//         htmlString += "<p class='mov-text'>" + data[i].Genre + "," + " " + data[i].Length + " " + "Mins" + "  " + data[i].Rating + "</p>";
//         htmlString += "<p class='mov-text'>" + data[i].LeadStars + "</p>";

//     }
//     console.log(htmlString);
//     // pageDisplay.insertAdjacentHTML(htmlString); This line was creating the issue .
//     pageDisplay.innerHTML=htmlString;
// }