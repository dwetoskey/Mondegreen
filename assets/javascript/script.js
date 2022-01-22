
//set variables and create buttons that are appended to correct div
let btn = document.createElement("button");
btn.innerHTML = "Search Title";
document.getElementById("artistform").appendChild(btn);
let artistbtn = document.createElement("button");
artistbtn.innerHTML = "Search Artist"
document.getElementById("artistsearch").appendChild(artistbtn);

//function for calling musicbrainz api with user input
btn.onclick = function(event) {

    var lyricquery = document.getElementById('lyricinput').value;
    var finalURL = "https://musicbrainz.org/ws/2/recording?fmt=json&query=" + lyricquery;
    console.log(finalURL);
    
    event.preventDefault();

    //fetching api data
    fetch(finalURL)
    .then(response => response.json())
    .then(data => {
                console.log('Success:', data);
                var titledata = [];

                
                //creating a table with data pulled from api fetch and appending it
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






//function to call last.fm api
artistbtn.onclick = function(event) {
//collecting user input for api call
var artistname = document.getElementById('artistinput').value;
event.preventDefault();

var cache = new LastFMCache();

//header using api keys
var lastfm = new LastFM({
  apiKey    : '349b2487cfb05e84fc790dd9a24c650b',
  apiSecret : '011c836b4712d4360f14a821f3c8c281',
  cache     : cache
});



//loading info from api using user input
lastfm.artist.getInfo({artist: artistname}, {success: function(data){
  
  var biodata = document.getElementById('artistbio');
  console.log(data.artist.bio.content);
  //populating requested artist bio
  biodata.innerText = data.artist.bio.content;
  
}, error: function(code, message){

    

}



});
}

// Delete function in production to refresh table

// document.addEventListener('DOMContentLoaded', () => {
//     (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
//       const $notification = $delete.parentNode;
  
//       $delete.addEventListener('click', () => {
//         $notification.parentNode.removeChild($notification);
//       });
//     });
//   });
