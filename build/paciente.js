var Paciente = /** @class */ (function () {
    function Paciente(name, cpf) {
        this.tempoInternado = 0;
        this.name = name;
        this.cpf = cpf;
    }
    Paciente.prototype.internacao = function (tempo) {
        this.tempoInternado += tempo;
    };
    return Paciente;
}());
var paciente = new Paciente('Andre', 17613544008);
paciente.internacao(5);
console.table(paciente);
