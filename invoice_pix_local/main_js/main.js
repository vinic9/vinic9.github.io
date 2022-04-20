//copy function
document.getElementById("btn_copy").onclick = function (){
  var copy_text = document.getElementById("pix_number");
  copy_text.select();
  copy_text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copy_text.value);

  document.getElementById("btn_copy").value = "Copiado!";


}

