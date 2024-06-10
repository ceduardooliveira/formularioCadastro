function adicionar() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
    
    var tableRef = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    
    var newRow = tableRef.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    
    cell1.innerHTML = nome;
    cell2.innerHTML = idade;
    cell3.innerHTML = email;
    cell4.innerHTML = '<button onclick="editar(this)">Editar</button> <button onclick="excluir(this)">Excluir</button>';
    
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
}

function editar(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
    
    var nome = cells[0].innerHTML;
    var idade = cells[1].innerHTML;
    var email = cells[2].innerHTML;
    
    document.getElementById("nome").value = nome;
    document.getElementById("idade").value = idade;
    document.getElementById("email").value = email;
    
    row.remove();
}

function excluir(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}