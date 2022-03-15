// Complete Day 1 goals here
let mySongs = [{
  songName: "Sucker For Pain",
  songArtist: "Lil Wayne",
  songImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSucker_for_Pain&psig=AOvVaw1dzwJHSgJlt398ERoBuKGH&ust=1646867566355000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDkx_XRt_YCFQAAAAAdAAAAABAD",
  songLink: "https://www.youtube.com/watch?v=IO2aTF7ygPE",
},
 {
  songName: "Middle Child",
  songArtist: "J. Cole",
  songImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMiddle_Child&psig=AOvVaw3FpQA8FAHlfAKXQ1dD86vt&ust=1646867628848000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjF65fSt_YCFQAAAAAdAAAAABAD",
  songLink: "https://www.youtube.com/watch?v=WILNIXZr2oc&ab_channel=JColeVEVO",
 },
   {                
  songName: "Another Day",
  songArtist: "Kid Cudi",
  songImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenius.com%2FKid-cudi-another-day-lyrics&psig=AOvVaw3rLfSQISIL-9U30nexkNxY&ust=1646867668923000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjUiKXSt_YCFQAAAAAdAAAAABAD",
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
