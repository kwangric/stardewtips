// Show completion when clicked
$('tr').click(function(){
  if ($(this).hasClass("table-head") == false) {
    $(this).toggleClass("completed");
  }
})
