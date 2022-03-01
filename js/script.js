// Complete Day 1 goals here

let songNames = [ "Sucker For Pain", "Middle Child", "Another Day",];
console.log(songNames);

let songArtists = ["J. Cole", "Kid Cudi", "Lil Wayne"];
console.log(songArtists);

let songImages = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWILNIXZr2oc&psig=AOvVaw1UJOnB4xzTeTe3PvsQ8bUD&ust=1644447159118000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCc1ZqZ8fUCFQAAAAAdAAAAABAD", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSucker_for_Pain&psig=AOvVaw1TRInPXzvFAICIDvQxLN4U&ust=1644447305640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLick96Z8fUCFQAAAAAdAAAAABAD", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenius.com%2FKid-cudi-another-day-lyrics&psig=AOvVaw0-qKLvzn29FA_aT9JpmxlG&ust=1644447394094000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPibp4ia8fUCFQAAAAAdAAAAABAD"];
console.log(songImages)

let songLinks = ["https://www.youtube.com/watch?v=WILNIXZr2oc&ab_channel=JColeVEVO", "https://www.youtube.com/watch?v=IO2aTF7ygPE&ab_channel=HasseneAyoub", "https://www.youtube.com/results?search_query=another+day+kid+cudi"];
console.log(songLinks);


function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songNames.forEach(function(songName){
    $('body').append(`<div>${songName}</div>`)
    
   
});
   songArtists.forEach(function(songArtist){
      $('body').append(`<div>${songArtist}</div>`)
 });
                
  songLinks.forEach(function(songLink){
  $('.links').append(`<div>${songLink}</div>`)
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
  songNames.push
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
