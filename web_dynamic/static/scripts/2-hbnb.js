$(document).ready(function () {
  $('.amenities input').change(function () {
    let id = [];
    let name = [];
    $('.amenities input:checked').each(function () {
      id.push($(this).attr('data-id'));
      name.push($(this).attr('data-name'));
      console.log($(this).attr('data-name'));
    });
    $('.amenities H4').val(name);
  });
});

let sta = $.get('http://0.0.0.0:5001/api/v1/status/');
sta.done(function () {
      $("DIV#api_status").addClass("available");
});
sta.fail(function () {
  $("DIV#api_status").removeClass("available")
});
