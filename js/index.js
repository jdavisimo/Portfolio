
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$('#phg1').on("click", function(){
  $('.animate').animate( {: '250px'}, 1000 );
});

// Step 2: Change a color
$('#button2').on("click", function(){
  $('.cssChange').css("background-color","red");
});

// Step 3: Append content
$('#button3').on("click", function(){
  $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
});

// Step 4: Animate a DIV
$("button").click( function(){
     $('.animate').animate( {left: '250px'}, 1000 );
});

