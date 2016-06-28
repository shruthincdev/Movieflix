/**
 * Created by Shruthin on 6/24/2016.
 */
$(function() {
    
    alert("Inside JQuery");
    
    $( "#datepicker" ).datepicker();

   /* $("#addTitle_action").submit(function () {
        if(document.getElementById("title_id")==null)
            msg=msg+"Titile is required";
            alert(msg);
        return;
    }) */

  
});

jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();


function validateInputParameters(){
    alert("Inside function");
    var errorMsg ="";
    if(document.getElementById(title_id)==null)
        errorMsg=errorMsg+"Title Cannot Be Empty";
    if(document.getElementById(year_id)==null)
        errorMsg=errorMsg+", Release Year Cannot Be Empty";
    
}


