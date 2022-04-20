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

//botão idv(info do investidor) / esconder mostrar
var btn = document.querySelector('#investidor_btn');
var idv_panel = document.querySelector('.idv_panel');

btn.addEventListener('click', function () {
  if (idv_panel.style.display === "block") {
    idv_panel.style.display = "none";
  } else {
    idv_panel.style.display = "block";
  }
})


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



//Pegar valores dos inputs

document.getElementById("input_checkbox").onclick = function () {
  if
    (document.getElementById("input_checkbox").checked) {

    var NomeValue = document.getElementById("nome").value;
    document.getElementById("receive_nome").value = NomeValue;

    //  var EnderecoValue = document.getElementById("endereco").value;
    //  document.getElementById("receive_endereco").value = EnderecoValue;

    //  var NumeroValue = document.getElementById("numero").value;
    //  document.getElementById("receive_numero").value = NumeroValue;

    //  var BairroValue = document.getElementById("bairro").value;
    //  document.getElementById("receive_bairro").value = BairroValue;

    //  var CidadeValue = document.getElementById("cidade").value;
    //  document.getElementById("receive_cidade").value = CidadeValue;

    //  var EstadoValue = document.getElementById("estado").value;
    //  document.getElementById("receive_estado").value = EstadoValue;

    var CpfValue = document.getElementById("cpf").value;
    document.getElementById("receive_cpf").value = CpfValue;



  }
  else {
    document.getElementById("receive_nome").value = "";
    document.getElementById("receive_cpf").value = "";

  }
}



//remove endereco_form

document.getElementById("remove_checked").onclick = function () {

  if (document.getElementById("remove_checked").checked) {

    document.getElementById("endereco_form").style.display = "none";



  }

  else {
    document.getElementById("endereco_form").style.display = "block";
  }
}