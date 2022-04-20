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
