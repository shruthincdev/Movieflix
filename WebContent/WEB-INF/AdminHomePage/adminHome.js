/**
 * Created by Shruthin on 6/24/2016.
 */

$(function() {
    $( "#tabs" ).tabs();
    $( "#tabs-add" ).tabs({
    });
    $("#tabs-add").load("AddTitle.html");
    $("#tabs-search").load("../UserHomePage/Search.html");
    $("#tabs-edit").load("EditTitle.html");
    $("#tabs-delete").load("DeleteTitle.html");
});