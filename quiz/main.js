
// Set the totalScore variable to 0 and insert it into the DOM and display on the web page using jQuery
var totalScore = 0;
$("#total #score").html(totalScore);
// JavaScript method in line below
// document.getElementById("score").innerHTML = totalScore;

$(document).ready(function() {

	// When the correct-ans class is clicked
	$(".correct-ans").click(function(){
		// Remove btn-default class and add btn-success
		$(this).removeClass("btn-default").addClass("btn-success");

        // Stop jquery doing anything else to this question
		$(this).unbind();
		$(this).siblings().unbind();

        // Add 1 to totalScore and insert it into the DOM and display on the web page using jQuery
        totalScore += 1;
        $("#total #score").html(totalScore);
        // JavaScript method in line below
        //  document.getElementById("score").innerHTML = totalScore;

    });

    $(".wrong-ans").click(function(){
	// Remove btn-default class and add btn-warning
	    $(this).removeClass("btn-default").addClass("btn-danger");

        // Stop jquery doing anything else to this question
        $(this).unbind();
		$(this).siblings().unbind();
    });
});

/* 
NOT USED - use toggle to reveal a message if Correct or Incorrect  !!!!!
    $(".correct-ans").click(function(){
        $("button").after("<p>Correct Answer</p>");
    });
*/

