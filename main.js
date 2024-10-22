/* In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:*/
/*marca
*anno
*colore
*porte
*carburante*/


//Successivamente:
/* Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta() */


//BONUS
/* In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili. */


//Successivamente:
/* Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante. */


class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    getCarAge() {
        const date = new Date();
        const year = date.getFullYear()
        return `${'Questa macchina ha:'} ${year - this.anno} ${'anni'} `
    }
}

const fiat2019 = new Veicolo('Fiat', 2019, 'blu');
console.log(fiat2019);
console.log(fiat2019.getCarAge());

class Automobile extends Veicolo {
    constructor(marca, anno, colore, porte, carburante, cambio,trazione) {
        super(marca, anno, colore, porte, carburante);
        this.cambio = cambio;
        this.trazione = trazione;
    }
}

const Opel = new Automobile('Opel', 2020, 'nera',4,'benzina','automatico','integrale');
console.log(Opel);
console.log(`${Opel.porte} ${Opel.carburante}`);

