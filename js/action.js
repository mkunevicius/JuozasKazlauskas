// Change home body background image every n seconds

$(function() {
  var body = $('body');
  var backgrounds = new Array(
    'url("img/IMG_5056.jpg")',
    'url("img/IMG_5046.jpg")',
    'url("img/IMG_5055.jpg")',
    'url("img/img_02.jpg")',
    'url("img/img_05.jpg")'
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
