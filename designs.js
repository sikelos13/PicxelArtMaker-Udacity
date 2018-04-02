function makeGrid() {
  /* Set variables of height, width and
  pixel canvas.Also clear the canvas*/
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  const table = $("#pixel_canvas");
  table.html('');
  /* Make the grid of the canvas.*/
  for (let i = 0; i < height; i++) {
    table.append("<tr></tr>");
  }
  //Make cells of Canvas.
  $('tr').each(function() {
    for (let j = 0; j < width; j++) {
      $(this).append('<td></td>');
    }
  });
}
$(document).ready(function() {
  const canvas = $("#pixel_canvas");
  const color = $('#colorPicker');
  /*From sizepicker submit the size of canvas and run makeGrid*/
  $("#sizePicker").on("submit", function(e) {
    e.preventDefault();
    makeGrid();
  });
  //when document is ready check if mouse is up or isDown
  let isDown = false;
  let isDownright = false;
  //When mouse is down on left click the set variabvle to true else false
  $(document).mousedown(function(e) {
    if (e.which === 1) {
      isDown = true;
    }
  });
  $(document).mouseup(function() {
    isDown = false;
  });
  //If mouse is down then mouseover the canvas with coloro from colorPicker
  canvas.on('mouseover', 'td', function(e) {
    if (isDown) {
      const colorCell = color.val();
      $(this).css('background-color', colorCell);
    }
  });
  /*Hold right click to erase
  Disable right click menu for better handle or missclicks on canva*/
  $(document).mousedown(function(e) {
    if (e.which === 3) {
      e.preventDefault();
      isDownright = true;
    }
  });
  $(document).mouseup(function() {
    isDownright = false;
  });
  canvas.on('mouseover', 'td', function(e) {
    if (isDownright) {
      e.preventDefault();
      $(this).css('background-color', '');
    }
  });
  //Disavle content menu of right click
  canvas.on('contextmenu', 'td', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });
  //Toogle grid on or off
  $('.toggleCell').click(function() {
    $('td').toggleClass('hideGrid');
  });
});
