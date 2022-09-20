class ContaBancaria {
    public numConta:number;
    public banco:string;
    private saldo:number=0;

    constructor(numConta:number, banco:string){
        this.numConta=numConta
        this.banco=banco

    }   
    public depositar (deposito:number){
        this.saldo+=deposito
    }
}
const conta = new ContaBancaria(295,'Santander')

conta.depositar(5000)

console.table(conta)