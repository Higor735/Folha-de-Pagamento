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

    calcularSalarioMensal(): number{
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

function calcularSalarioMensal(id:number): number | undefined{
    const funcionario = funcionarios.find(f => f.id === id);
    if (funcionario){
        return funcionario.calcularSalarioMensal();
    }else{
        console.error("funcionario não encontrado");
        return undefined;
    }
}

function calcularInss(id: number): number | undefined {
    const funcionario = funcionarios.find(f => f.id === id);
    if (funcionario){
        const salario = funcionario.calcularSalarioMensal();
        const inss = salario * 0.08;
        return inss;
    }else{
        console.error("funcionario não encontrado");
        return undefined;
    }
}

function gerarRelatorioPagamento(): void{
    funcionarios.forEach(funcionario =>{
        const salario = funcionario.calcularSalarioMensal();
        const inss = salario * 0.08;
        console.log(`
            nome: ${funcionario.nome}
            Cargo: ${funcionario.cargo}
            Salario Bruto: R$ ${salario.toFixed(2)}
            INSS: R$ ${inss.toFixed(2)}
            salario Liquido: R$ ${(salario - inss).toFixed(2)}
            `);
    });
}

function gerenciarFolhaPagamento(): void{
    adicionarFuncionario(1,"joão silva", "desenvolvedor",50);
    adicionarFuncionario(2,"maria Santos","designer",45);

    registrarHoras(1,160);
    registrarHoras(2,140);

    gerarRelatorioPagamento();
}