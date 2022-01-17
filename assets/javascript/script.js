var requestURL = "";

let btn = document.createElement("button");
btn.innerHTML = "Search Title";
document.getElementById("artistform").appendChild(btn);
// let artistbtn = document.createElement("button");
// artistbtn.innerHTML = "Search Artist"
// document.getElementById("buylink").appendChild(artistbtn);

btn.onclick = function() {
    var lyricquery = document.getElementById('lyricinput').value;
    var finalURL = "https://musicbrainz.org/ws/2/recording?fmt=json&query=" + lyricquery;
    console.log(finalURL);

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


            
    
    // function setGlobal() {
    //     requestURL = finalURL;
    // };


    //console.log(JSON.stringify(finalURL));
    // var myArr = JSON.stringify(finalURL);
    // const urlstring = JSON.parse(myArr, );
    // console.log(urlstring);


    // fetch (finalURL, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    
       
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