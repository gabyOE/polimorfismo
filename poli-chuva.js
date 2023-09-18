class Chuva {
    constructor() {
        this.tipo = "Chuva";
    }

    descreverIntensidade() {
        return "Chuva genérica";
    }
}

class ChuvaLeve extends Chuva {
    constructor() {
        super();
        this.tipo = "Chuva Leve";
    }

    descreverIntensidade() {
        return "Chuva leve está caindo.";
    }
}

class ChuvaModerada extends Chuva {
    constructor() {
        super();
        this.tipo = "Chuva Moderada";
    }

    descreverIntensidade() {
        return "Chuva moderada está caindo.";
    }
}

class ChuvaForte extends Chuva {
    constructor() {
        super();
        this.tipo = "Chuva Forte";
    }

    descreverIntensidade() {
        return "Chuva forte está caindo.";
    }
}

function descreverChuva(chuva) {
    console.log(`Tipo de chuva: ${chuva.tipo}`);
    console.log(chuva.descreverIntensidade());
}

const chuvaLeve = new ChuvaLeve();
const chuvaModerada = new ChuvaModerada();
const chuvaForte = new ChuvaForte();

descreverChuva(chuvaLeve);
descreverChuva(chuvaModerada);
descreverChuva(chuvaForte);
