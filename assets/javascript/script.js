var requestURL = "";

let btn = document.createElement("button");
btn.innerHTML = "Search Title";
document.getElementById("artistform").appendChild(btn);
let artistbtn = document.createElement("button");
artistbtn.innerHTML = "Search Artist"
document.getElementById("artistsearch").appendChild(artistbtn);

btn.onclick = function() {
    var lyricquery = document.getElementById('lyricinput').value;
    var finalURL = "https://musicbrainz.org/ws/2/recording?fmt=json&query=" + lyricquery;
    console.log(finalURL);

    event.preventDefault();

    fetch(finalURL)
    .then(response => response.json())
    .then(data => {
                console.log('Success:', data);
                var titledata = [];

                for(let i = 0; i < 5; i++){
                    data.recordings[i]["artist-credit"][0].name
                    console.log(data.recordings[i]["artist-credit"][0].name);
                    titledata.push(data.recordings[i]["artist-credit"][0].name)
                }

                var pagetable = document.getElementById("infotable");
                var tablerow = document.createElement("tr");
                var tabledata = document.createElement("td");
                tabledata.appendChild(document.createTextNode("hello"));
                for (let index = 0; index < 5; index++) {
                    tablerow = document.createElement("tr");
                   tabledata = document.createElement("td");
                   tabledata.appendChild(document.createTextNode(titledata[index]))
                   tablerow.appendChild(tabledata);
                   pagetable.appendChild(tablerow);
                    
                }
              
                pagetable.appendChild(tablerow);
                
                 

            })
       
}


artistbtn.onclick = function() {

var artistname = document.getElementById('artistinput').value;
event.preventDefault();

var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : '349b2487cfb05e84fc790dd9a24c650b',
  apiSecret : '011c836b4712d4360f14a821f3c8c281',
  cache     : cache
});



/* Load some artist info. */
lastfm.artist.getInfo({artist: artistname}, {success: function(data){
  /* Use data. */
  console.log(data);
 

}, error: function(code, message){

    data.appendChild("artistbio");
  /* Show error message. */
}});
}
// setGlobal();
// console.log(requestURL);

// fetch(requestURL)
// .then(function(response){
//     console.log(response.json)
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
// });



console.log("test");