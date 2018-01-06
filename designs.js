
function makeGrid(height,width) {
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  $("#pixel_canvas").html('');
  for(var i=0;i<height;i++){
    $("#pixel_canvas").append("<tr></tr>");
  }
  $('tr').each(function() {
    for(var j =0;j<width;j++){
      $(this).append('<td></td>');
    }
  });
}
$(document).ready(function(){
  var canvas= $("#pixel_canvas");
  var color= $('#colorPicker');
  $("#sizePicker").on("submit",function(e){
    makeGrid();
    e.preventDefault();
    });
//when document is ready check if mouse is up or isDown
  var isDown=false;
  $(document).mousedown(function(e){
    if(e.which===1){
      isDown = true;
    }
    });
  $(document).mouseup(function(){  isDown= false; });
  //set color from colorPicker
  canvas.on('mousedown','td',function() {
    if(isDown){
      var colorCell = color.val();
      $(this).attr('bgcolor',colorCell);
    }
  });
  //If mouse is down the mouseover the canvas
  canvas.on('mouseover','td',function(e){
    if(isDown){
      var colorCell = color.val();
      $(this).attr('bgcolor',colorCell);
    }
  });
});
//On right click set attribute to null
//Disable right click menu for better handle or missclicks on canva
$("#pixel_canvas").on('contextmenu','td',function(e){
  e.preventDefault();
  e.stopPropagation();
  $(this).attr('bgcolor','');
});
