function inserirRegistro(){
	var tabela = document.getElementById('registros');
	var criacao = document.getElementById('criacao').value;
	var n_cidade = document.getElementById('n_cidade').value;
	var estado = document.getElementById('estado').value;
	var popu = document.getElementById('popu').value;
	var pais = document.getElementById('pais').value;

	var linhasTotais = tabela.rows.length;
	var novaLinha = tabela.insertRow(linhasTotais);

	var novaCelulaCriacao=novaLinha.insertCell(0);
	var novaCelulaCidade=novaLinha.insertCell(1);
	var novaCelulaEstado=novaLinha.insertCell(2);
	var novaCelulaPopulacao=novaLinha.insertCell(3);
	var novaCelulaPais=novaLinha.insertCell(4);
	var novaCelulaEditar=novaLinha.insertCell(5);

	novaCelulaCriacao.innerHTML=criacao;
	novaCelulaCidade.innerHTML=n_cidade;
	novaCelulaEstado.innerHTML=estado;
	novaCelulaPopulacao.innerHTML=popu;
	novaCelulaPais.innerHTML=pais;
	novaCelulaEditar.innerHTML='<input type="button" onclick="retornarRegistro()" value=" ">'

	document.getElementById('criacao').value = '';
	document.getElementById('n_cidade').value = "";
	document.getElementById('estado').value = "";
	document.getElementById('popu').value = "";
	document.getElementById('pais').value = '';

}
function retornarRegistro(){
	var tabela = document.getElementById('registros');
	document.getElementById('criacao').value = tabela.rows[?].cells[0].innerHTML;
}