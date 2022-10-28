$(document).ready(function () {
  $('.amenities input').change(function () {
    let id = [];
    let name = [];
    $('.amenities input:checked').each(function () {
      id.push($(this).attr('data-id'));
      name.push($(this).attr('data-name'));
    });
    $('.amenities H4').text(name.join(', '));
  });
});
