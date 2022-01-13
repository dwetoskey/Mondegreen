var requestURL = "https://musicbrainz.org/ws/2/recording?query=";

let btn = document.createElement("button");
btn.innerHTML = "Search";
document.body.appendChild(btn);


btn.onclick = function() {
    var lyricquery = document.getElementById('lyricinput')
    var finalURL = "https://musicbrainz.org/ws/2/recording?query=" + lyricquery;
    console.log(finalURL);

}

// fetch(requestURL)
// .then(function(response){
//     console.log(response.json)
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
// });



console.log("test");