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



//botão pix / esconder mostrar


var btn = document.querySelector('#hidden_btn');
var panel_pix = document.querySelector('.panel_pix');


btn.addEventListener('click', function()
{
  if (panel_pix.style.display === "none") {
    panel_pix.style.display = "block";
  } else {
    panel_pix.style.display = "none";
  }
});

//botão cdc(cartão de crédito) / esconder mostrar
var btn = document.querySelector('#hidden2_btn');
var panel_cdc = document.querySelector('.panel_cdc');

btn.addEventListener('click', function()
{
  if (panel_cdc.style.display === "none") {
    panel_cdc.style.display = "block";
  } else {
    panel_cdc.style.display = "none";
  }
})


//auto tab

function autoTab( fromTextBox, toTextBox){
  let length = fromTextBox.value.length;
  var maxlength =  fromTextBox.getAttribute("maxLength");
  
  if( length == maxlength){
    document.getElementById(toTextBox).focus();

  }

}


//copy paste 

function copytext(htmlElement){
if(!htmlElement){
  return;
}

let elementText = htmlElement.innerText;
let inputElement = document.createElement('input');
inputElement.setAttribute('value', elementText);
document.body.appendChild(inputElement);
inputElement.select();
document.execCommand('copy');

inputElement.parentNode.removeChild(inputElement);

};

document.querySelector('#btnCopy').onclick = function() {
copytext(document.querySelector('#myPix'));

};