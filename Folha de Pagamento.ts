class funcionario {
    id:number;
    nome:string;
    cargo:string;
    taxaHoraria:number;
    horasTrabalhadas:number;

    constructor(id:number,nome:string,cargo:string,taxaHoraria:number){
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = 0;
    }

    registrarHoras(horas:number): void{
        this.horasTrabalhadas += horas;
    }

    caucularSalarioSemanal(): number{
        return this.taxaHoraria * this.horasTrabalhadas;
    }
}

let funcionarios: funcionario[] = [];

function adicionarFuncionario(id:number,nome:string,cargo:string,taxaHoraria:number): void{
    const novoFuncionario = new funcionario(id,nome,cargo,taxaHoraria);
    funcionarios.push(novoFuncionario);
}

function registrarHoras(id:number, horas: number): void{
    const funcionario = funcionarios.find(f => f.id === id);
    if(funcionario){
        funcionario.registrarHoras(horas);
    }else{
        console.error("Funcionario não encontrado");
    }
}

