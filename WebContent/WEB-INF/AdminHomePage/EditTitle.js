/**
 * Created by Shruthin on 7/3/2016.
 */
/**
 * Created by Shruthin on 6/24/2016.
 */
$(document).ready(function() {
    $( "#datepicker_edit" ).datepicker();


    /* To validate input fields of Edit Title page */
    $("#edit_Title").click(function () {

        var one = $("#title_edit_id");
        if(one.val() == "")
        {
            title_edit_id_p.innerHTML = "** Title is mandatory field";
        }
        else
        {
            title_edit_id_p.innerHTML = "";
        }

        /*  Year field validation*/
        var two = $("#year_edit_id");
        if(two.val() == "")
        {
            year_edit_id_p.innerHTML = "** Year is mandatory field";
        }
        else
        {
            year_edit_id_p.innerHTML = "";
        }

        /*  Certification radio button validation*/
        if ($('input[name=Certificates_edit]:checked').length == 0)
        {
            certificate_edit_p.innerHTML = "** Certificate Selection is Mandatory"
        }
        else{
            certificate_edit_p.innerHTML = "";
        }

        /*  Release date field validation*/
        var three = $("#datepicker_edit");
        if(three.val() == "")
        {
            datepicker_edit_p.innerHTML ="** Release Date is Mandatory";
        }
        else {
            datepicker_edit_p.innerHTML ="";
        }

        /*  Genre field validation*/
        var atLeastOneIsChecked = $('input[name="genres_edit"]:checked').length;
        if(atLeastOneIsChecked == 0){
            genres_edit_p.innerHTML ="** Genre of the title should be selected";
        }
        else{
            genres_edit_p.innerHTML ="";
        }

        /*  Director Names field validation*/
        var four = $("#director_edit_id");
        if(four.val() == "")
        {
            director_edit_id_p.innerHTML = "** Director Name is mandatory field";
        }
        else
        {
            director_edit_id_p.innerHTML = "";
        }


        /*  Writers Names field validation*/
        var five = $("#Writers_edit_id");
        if(five.val() == "")
        {
            Writers_edit_id_p.innerHTML = "** Writer Name/Names should be entered";
        }
        else
        {
            Writers_edit_id_p.innerHTML = "";
        }


        /*  Actors Names field validation*/
        var six = $("#actors_edit_id");
        if(six.val() == "")
        {
            actors_edit_id_p.innerHTML = "** Actor Name/Names should be entered";
        }
        else
        {
            actors_edit_id_p.innerHTML = "";
        }


        /*  Plot textarea validation */
        var seven = $("#plot_edit_id");
        if(seven.val() == "")
        {
            plot_edit_id_p.innerHTML = "** Plot of the title is Mandatory";
        }
        else
        {
            plot_edit_id_p.innerHTML = "";
        }


        /*  Language field validation*/
        var atLeastOneIsChecked1 = $('input[name="language_edit"]:checked').length;
        if(atLeastOneIsChecked1 == 0){
            language_edit_p.innerHTML ="** Language of the title should be selected";
        }
        else{
            language_edit_p.innerHTML ="";
        }


        /*  Countries field validation*/
        var atLeastOneIsChecked2 = $('input[name="countries_edit"]:checked').length;
        if(atLeastOneIsChecked2 == 0){
            countries_edit_p.innerHTML ="** Country of the title should be selected";
        }
        else{
            countries_edit_p.innerHTML ="";
        }

        /*  Poster URI field validation */
        var eight = $("#poster_edit_id");
        if(eight.val() == "")
        {
            poster_edit_id_p.innerHTML = "** Title's Poster URI is Mandatory";
        }
        else
        {
            poster_edit_id_p.innerHTML = "";
        }


        /*  Metascore field validation */
        var nine = $("#score_edit_id");
        if(nine.val() == "")
        {
            score_edit_id_p.innerHTML = "** Metascore value is Mandatory";
        }
        else
        {
            score_edit_id_p.innerHTML = "";
        }


        /*  IMDB ratting field validation */
        var ten = $("#rating_edit_id");
        if(ten.val() == "")
        {
            rating_edit_id_p.innerHTML = "** IMDB rating is Mandatory";
        }
        else
        {
            rating_edit_id_p.innerHTML = "";
        }


        /*  IMDB ID field validation */
        var eleven = $("#imdb_edit_id");
        if(eleven.val() == "")
        {
            imdb_edit_id_p.innerHTML = "** IMDB ID is Mandatory";
        }
        else
        {
            imdb_edit_id_p.innerHTML = "";
        }


    });

    /* To clear data in the input fields of Edit Title page */
    $("#Cancel_update").click(function () {
        alert("In cancel update function");
        $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
        $(':checkbox, :radio').prop('checked', false);
        return;
    });

});