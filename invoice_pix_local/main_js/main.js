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

//Copy Function

/*
  if 'button' is 'active(true)'
    then execute
  Copy
    seleect the the html tag 
    select the attribute
    select the value attribute
    use function to copy it   
  */

    function CopyButton(){
      var copy_text = document.getElementById("pix_number");
      copy_text.select();
      copy_text.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copy_text.value);

    }