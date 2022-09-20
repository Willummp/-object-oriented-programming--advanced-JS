var Patinete = /** @class */ (function () {
    function Patinete(rodas, valor) {
        this.rodas = rodas;
        this.valor = valor;
    }
    Patinete.prototype.andar = function (andar) {
        console.log("O patinete come\u00E7ou a andar");
    };
    return Patinete;
}());
var patinete = new Patinete(2, 250);
patinete.andar('Sim');
console.log("O patinete tem ".concat(this.rodas));
