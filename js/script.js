var link = document.querySelector ('.btn-popup');
var popup = document.querySelector ('.modal-search-popup');
var overlay = document.querySelector ('.modal-overlay');


link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-search-popup-show');
  overlay.classList.add('modal-overlay-show');
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 27) {
    popup.classList.remove('modal-search-popup-show');
    overlay.classList.remove('modal-overlay-show');
  }
});

overlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-search-popup-show');
  overlay.classList.remove('modal-overlay-show');
});
