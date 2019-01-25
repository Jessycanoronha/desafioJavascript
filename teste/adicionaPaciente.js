adicionarDados.addEventListener("click",function(event){

event.preventDefault(); // impede comportamento padrão

var Nome = document.querySelector("input[name='nome']");
var Idade = document.querySelector("input[name='idade']");
var Sexo = document.querySelector("input[type='radio']:checked");

var Peso = document.querySelector("input[name='peso']");
var Altura = document.querySelector("input[name='altura']");
var imc = Peso.value / (Altura.value * Altura.value);

    if (Nome.value != "" || Idade.value !="" || Peso.value != "" || Altura.value != ""){
        var trDoNovoPaciente = document.getElementsByTagName("paciente")[0];
        var pacienteNovo = "<tr class='paciente'>"+
                              "<td class='dados-nome'>" +Nome.value+ "</td>"+ 
                             
                              "<td class='dados-idade'>"+Idade.value+"</td>"+ //pega o que eu digitar
                              
                              
                              "<td class='dados-sexo'>"+Sexo.value+"</td>"+
                              "<td class='dados-peso'>"+Peso.value+"</td>"+

                              "<td class='dados-altura'>"+Altura.value+"</td>"+
                              "<td class='dados-imc'>"+Peso.value/(Altura.value*Altura.value)+"</td>"+
                              "<td><button onClick='apagarLinha()'>Limpar</button></td>"+
                              "<td><button onClick='editarLinha()'>Editar</button></td>"+

                              "</tr>";

        //Criei o paciente
        var todosPacientes = document.querySelector("table"); //primeiro paciente
        todosPacientes.innerHTML = todosPacientes.innerHTML + pacienteNovo;     


        //Limpando form pra n me perder
        Nome.value     = "";
        Peso.value     = "";
        Idade.value    ="";
        Altura.value   = "";


    }else{
        alert("Assim não dá :/, falta preencher Nome, Idade, Peso, Altura e Sexo");
        console.log("Por favor, preencha seus dados!");
    }


   
});

function apagarLinha(id){
    myTable = document.getElementById(id);
    myTable.parentNode.parentNode.removeChild(myTable.parentNode);
}
 

function editarLinha(){

}


