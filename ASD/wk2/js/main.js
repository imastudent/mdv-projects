/* author: Alexia Dawson
  project: The Busy Ninja, CouchDB app
*/


$(function(){
    
    var cats = ["--Choose a category--", "Bladed", "Blunt", "Throwing", "Poison", "Other"];
    
    function loadcats() {
        $("#category").empty()
        $.each(cats, function(index, value){$("<option />").html(value).appendTo("#category")});
    }
    
    var myoptions = {};
    
    function buildList(data){
        var itemList = [];
        $.each(data.items, function(key, val) {
	    if(val.category[1]==="Bladed"){
            itemList.push('<ul id="' + key + '">');
            $.each(val, function(index, data) {
                itemList.push('<li>' + data[0] + ' ' + data[1] + '</li>');
            });
            itemList.push('</ul>');
	    }
        });
        $('<ul/>')
            .html(itemList.join(''))
            .appendTo('#listItems');
    }
    
    function showJSON () {
        $('#addweapon').css({display:"none"});
        $('#listItems').empty();
	$('#feature').css({display: "none"});
	console.log("Displaying JSON data.");
	console.log($('.ui-btn-text'));
        $.ajax({
            url: 'xhr/jdata.json',
            type: 'GET',
            dataType: 'json',
            success: function(result){
                buildList(result);   
            }
        }); //ajax
    } //showJSON

    loadcats();
    $('.ui-collapsible-heading').click(showJSON);
    
});

