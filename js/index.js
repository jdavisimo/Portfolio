
// Modal Image Gallery

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


/* HOVER QUERY */

$( ".phg" ).hover(
  function() {
    $(".phg").addClass("hover");
  }, function() {
    $(".phg").removeClass("hover");
  });
$(".phg").off("mouseenter mouseleave");


$( ".skillsGridImage" ).hover(
  function() {
    $(".skillsGridImage").addClass("hover");
  }, function() {
    $(".skillsGridImage").removeClass("hover");
  });
$(".skillsGridImage").off("mouseenter mouseleave");


$( ".menuButtons" ).hover(
  function() {
    $(".menuButtons").addClass("hover");
  }, function() {
    $(".menuButtons").removeClass("hover");
  });
$(".menuButtons").off("mouseenter mouseleave");