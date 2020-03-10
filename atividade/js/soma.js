function somar() {

	var numero1 = document.getElementById('numero1').value;
	var numero2 = document.getElementById('numero2').value;
	var soma = parseFloat(numero1)+ parseFloat(numero2);
	alert('soma: ' + soma);
}