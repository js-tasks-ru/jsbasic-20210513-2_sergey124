function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  function hiddens(){
    text.hidden = !text.hidden;
  }
  button.addEventListener('click', hiddens)
}