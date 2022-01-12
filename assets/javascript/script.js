var requestURL = "https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=love&page_size=3&page=1&apikey=bd6abc7893804c49fc007988f1aa727f"


fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
});