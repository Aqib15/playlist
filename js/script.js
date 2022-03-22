// Complete Day 1 goals here
let mySongs = [{
  songName: "Sucker For Pain",
  songArtist: "Lil Wayne",
  songImage: "https://cdn.glitch.global/ac389f6e-4633-4e4f-9fa6-e09fb5003f29/1ff8798d-ae4c-4853-92dd-20b63ad93fa3.image.png?v=1647983817814",
  songLink: "https://www.youtube.com/watch?v=IO2aTF7ygPE",
},
 {
  songName: "Middle Child",
  songArtist: "J. Cole",
  songImage: "https://cdn.glitch.global/ac389f6e-4633-4e4f-9fa6-e09fb5003f29/b93280f9-05e0-4c09-8e43-692eb029bcf7.image.png?v=1647983790616",
  songLink: "https://www.youtube.com/watch?v=WILNIXZr2oc&ab_channel=JColeVEVO",
 },
   {                
  songName: "Another Day",
  songArtist: "Kid Cudi",
  songImage: "https://cdn.glitch.global/ac389f6e-4633-4e4f-9fa6-e09fb5003f29/27e985f6-ec9b-4648-8487-ff54bb63caaa.image.png?v=1647983761370",
  songLink: "https://www.youtube.com/results?search_query=another+day+kid+cudi", 
 }];



 
  // Complete the Day 2 goals inside this function
  function displaySongInfo(){
   mySongs.forEach(function(song){
    $('.songs').append(`<div>${song.songName}</div>`)
    $('.artists').append(`<div>${song.songArtist}</div>`)
     $('.links').append(`<a href="${song.songLink}">${song.songName}</a>`) 
     $('.images').append(`<img src="${song.songImage}">`)
});

  
  
  };

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let newSong = {
  songName: $(".title").val(),
  songArtist: $(".artist").val(),
  songImage: $(".image").val(), 
  songLink: $(".link").val(),
    
  }
    

  mySongs.push(newSong)
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
