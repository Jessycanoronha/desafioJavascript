function criaPaciente(trPacienteAtual){
    var nome = trPacienteAtual.getElementsByClassName('info-nome')[0].textContent;
    var sexo = trPacienteAtual.getElementsByClassName('info-sexo')[0].textContent;
    var idade = trPacienteAtual.getElementsByClassName('info-idade')[0].textContent;
    
    var peso = trPacienteAtual.getElementsByClassName('info-peso')[0].textContent;
    var altura = trPacienteAtual.getElementsByClassName('info-altura')[0].textContent;


    var paciente = {
        nome    : nome,
        idade   :idade,
        sexo    :sexo,
        peso    : peso,
        altura  : altura,
        getIMC  : function(){
            if(this.altura > 0){
                return this.peso / (this.altura * this.altura);
            }else{
                console.log("Altura inválida!!! :/");
            }
        }
    };

    return paciente;
}