var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numConta, banco) {
        this.saldo = 0;
        this.numConta = numConta;
        this.banco = banco;
    }
    ContaBancaria.prototype.depositar = function (deposito) {
        this.saldo += deposito;
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria(295, 'Santander');
conta.depositar(5000);
console.table(conta);
