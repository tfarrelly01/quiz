/*
<script>
 $(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
</script>
<p>If you click on the "Hide" button, I will disappear.</p>

<button id="hide">Hide</button>
<button id="show">Show</button>
*/
$(document).ready(function() {
    $("#Gready").fadeOut(2000);
});


$(document).ready(function() {
    $("#GSet").fadeOut(5000);
});


$(document).ready(function() {
    $("#Go").fadeOut(10000);
});

$(document).ready(function(){
    $("#reveal").click(function(){
        $("#q1-answers").toggle();
    });
});