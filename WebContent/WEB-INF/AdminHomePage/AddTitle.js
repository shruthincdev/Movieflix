/**
 * Created by Shruthin on 6/24/2016.
 */
$(document).ready(function() {
    $("#datepicker").datepicker();


    $("#add_Title").click(function () {
        var count = 0;
        /*  Title field validation*/
        var one = $("#title_id");
        if(one.val() == "")
        {
            title_id_p.innerHTML = "** Title is mandatory field";
            count = 1;
        }
        else
        {
            title_id_p.innerHTML = "";
        }

        /*  Year field validation*/
        var two = $("#year_id");
        if(two.val() == "")
        {
            year_id_p.innerHTML = "** Year is mandatory field";
            count = 1;
        }
        else
        {
            year_id_p.innerHTML = "";
        }

        /*  Certification radio button validation*/
        if ($('input[name=Certificates]:checked').length == 0)
        {
            certificate_p.innerHTML = "** Certificate Selection is Mandatory"
            count = 1;
        }
        else{
            certificate_p.innerHTML = "";
        }

        /*  Release date field validation*/
        var three = $("#datepicker");
        if(three.val() == "")
        {
            datepicker_p.innerHTML ="** Release Date is Mandatory";
            count = 1;
        }
        else {
            datepicker_p.innerHTML ="";
        }

        /*  Genre field validation*/
        var atLeastOneIsChecked = $('input[name="genres"]:checked').length;
        if(atLeastOneIsChecked == 0){
            genres_p.innerHTML ="** Genre of the title should be selected";
            count = 1;
        }
        else{
            genres_p.innerHTML ="";
        }

        /*  Director Names field validation*/
        var four = $("#director_id");
        if(four.val() == "")
        {
            director_id_p.innerHTML = "** Director Name is mandatory field";
            count = 1;
        }
        else
        {
            director_id_p.innerHTML = "";
        }


        /*  Writers Names field validation*/
        var five = $("#Writers_id");
        if(five.val() == "")
        {
            Writers_id_p.innerHTML = "** Writer Name/Names should be entered";
            count = 1;
        }
        else
        {
            Writers_id_p.innerHTML = "";
        }


        /*  Actors Names field validation*/
        var six = $("#actors_id");
        if(six.val() == "")
        {
            actors_id_p.innerHTML = "** Actor Name/Names should be entered";
            count = 1;

        }
        else
        {
            actors_id_p.innerHTML = "";
        }


        /*  Plot textarea validation */
        var seven = $("#plot_id");
        if(seven.val() == "")
        {
            plot_id_p.innerHTML = "** Plot of the title is Mandatory";
            count = 1;

        }
        else
        {
            plot_id_p.innerHTML = "";
        }


        /*  Language field validation*/
        var atLeastOneIsChecked1 = $('input[name="language"]:checked').length;
        if(atLeastOneIsChecked1 == 0){
            language_p.innerHTML ="** Language of the title should be selected";
            count = 1;
        }
        else{
            language_p.innerHTML ="";
        }


        /*  Countries field validation*/
        var atLeastOneIsChecked2 = $('input[name="countries"]:checked').length;
        if(atLeastOneIsChecked2 == 0){
            countries_p.innerHTML ="** Country of the title should be selected";
            count = 1;
        }
        else{
            countries_p.innerHTML ="";
        }

        /*  Poster URI field validation */
        var eight = $("#poster_id");
        if(eight.val() == "")
        {
            poster_id_p.innerHTML = "** Title's Poster URI is Mandatory";
            count = 1;
        }
        else
        {
            poster_id_p.innerHTML = "";
        }


        /*  Metascore field validation */
        var nine = $("#score_id");
        if(nine.val() == "")
        {
            score_id_p.innerHTML = "** Metascore value is Mandatory";
            count = 1;
        }
        else
        {
            score_id_p.innerHTML = "";
        }


        /*  IMDB ratting field validation */
        var ten = $("#rating_id");
        if(ten.val() == "")
        {
            rating_id_p.innerHTML = "** IMDB rating is Mandatory";
            count = 1;
        }
        else
        {
            rating_id_p.innerHTML = "";
        }


        /*  IMDB ID field validation */
        var eleven = $("#imdb_id");
        if(eleven.val() == "")
        {
            imdb_id_p.innerHTML = "** IMDB ID is Mandatory";
            count = 1;
        }
        else
        {
            imdb_id_p.innerHTML = "";
        }

        if(count === 0){
            //alert("All values are entered");
            var status = "Successfully Inserted Title";
            $('#add_Title').prop('type', 'submit');

        }
        
    });
    

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



   

