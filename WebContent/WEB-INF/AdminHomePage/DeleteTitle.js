/**
 * Created by Shruthin on 7/3/2016.
 */

/**
 * Created by Shruthin on 6/24/2016.
 */
$(document).ready(function() {
    $("#delete_Title").click(function () {

        /*  IMDB ID field validation */
        var delVal = $("#imdb_id1");
        if(delVal.val() == "")
        {
            imdb_id1_p.innerHTML = "** IMDB ID is Mandatory";
        }
        else
        {
            imdb_id1_p.innerHTML = "";
        }


    });


});




   

