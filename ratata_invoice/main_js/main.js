//botão heading / esconder mostrar


var btn = document.querySelector('#hidden0_btn');
var first_panel = document.querySelector('.first-panel');


btn.addEventListener('click', function()
{
  if (first_panel.style.display === "none") {
    first_panel.style.display = "block";
  } else {
    first_panel.style.display = "none";
  }
});