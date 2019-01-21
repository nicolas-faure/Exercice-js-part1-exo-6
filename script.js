function getSee() {
  var firstNumber =document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var result = firstNumber%secondNumber;
  if (isNaN(firstNumber)== false && isNaN(secondNumber)==false){
    alert('premier nombre :'+firstNumber+'\n/ deuxième nombre :'+secondNumber+'\nReste ='+result);
  }else {
    alert("QUE DES chiffres BOULET !!");
  }
}
