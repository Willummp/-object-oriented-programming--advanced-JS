class Paciente {
    public name: string;
    public cpf: number;
    public tempoInternado: number=0;

    constructor (name:string, cpf:number){
        this.name=name;
        this.cpf=cpf;
    }
    public internacao(tempo:number){
        this.tempoInternado+=tempo
    }

}
const paciente = new Paciente ('Andre',17613544008)

paciente.internacao(5)

console.table(paciente)