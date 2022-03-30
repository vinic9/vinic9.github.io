//botão heading / esconder mostrar


var btn = document.querySelector('#firstpanel_btn');
var first_panel = document.querySelector('.first_panel');


btn.addEventListener('click', function () {
  if (first_panel.style.display === "none") {
    first_panel.style.display = "block";
  } else {
    first_panel.style.display = "none";
  }
});


//botão cdc(cartão de crédito) / esconder mostrar
var btn = document.querySelector('#creditcard_btn');
var cdc_panel = document.querySelector('.cdc_panel');

btn.addEventListener('click', function () {
  if (cdc_panel.style.display === "block") {
    cdc_panel.style.display = "none";
  } else {
    cdc_panel.style.display = "block";
  }
})


//auto tab

function autoTab(fromTextBox, toTextBox) {
  let length = fromTextBox.value.length;
  var maxlength = fromTextBox.getAttribute("maxLength");

  if (length == maxlength) {
    document.getElementById(toTextBox).focus();

  }

}

