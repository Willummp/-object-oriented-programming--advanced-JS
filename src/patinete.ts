class Patinete {
    public rodas: number;
    public valor: number;

    constructor (rodas:number, valor:number){
        this.rodas=rodas;
        this.valor=valor;
    }
    public andar(andar:string){
        console.log(`O patinete começou a andar`);
    }

}
const patinete = new Patinete(2, 250);

console.log(`O patinete tem ${this.rodas}`);



