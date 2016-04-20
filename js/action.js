// Change home body background image every n seconds

$(function() {
  var body = $('.home-body');
  var backgrounds = new Array(
    'url("img/img_05.jpg")',
    'url("img/img_01.jpg")',
    'url("img/img_03.jpg")',
    'url("img/img_04.jpg")',
    'url("img/img_02.jpg")'
  );
  var current = 0;

  function nextBackground() {
    body.css(
      'background-image',
      backgrounds[current = ++current % backgrounds.length]
    );
  setTimeout(nextBackground, 5000);
  }
  setTimeout(nextBackground, 3000);
  body.css('background-image', backgrounds[0]);
});
