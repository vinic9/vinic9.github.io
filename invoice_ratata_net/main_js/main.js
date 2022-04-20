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



//botão pix / esconder mostrar


var btn = document.querySelector('#pixpanel_btn');
var panel_pix = document.querySelector('.panel_pix');


btn.addEventListener('click', function () {
  if (panel_pix.style.display === "block") {
    panel_pix.style.display = "none";
  } else {
    panel_pix.style.display = "block";
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


//copy function
document.getElementById("copy_btn").onclick = function () {
  var copy_text = document.getElementById("pix_number");
  copy_text.select();
  copy_text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copy_text.value);

  if (this.innerText === 'Pix Copia e Cola') {
    this.innerText = 'Copiado';
  }
  else {
    //
  }


}
