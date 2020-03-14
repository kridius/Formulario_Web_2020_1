function formulario(){
	var nome = document.getElementById('nome').value;
	var cpf = document.getElementById('cpf').value;
	var profissao = document.getElementById('profissao').value;

	var linha = '<tr>';
	linha += '<td>' +nome+ '</td>';
	linha += '<td>' +cpf+ '</td>';
	linha += '<td>' +profissao+ '</td>';
	linha += '</tr>'

	tabela.innerHTML += linha;

}