class MeresiAdat{
    #meresIdeje; //# - mező csak a osztályon belül érhető el - védett adat
    #meresAdat;

    //adatok beállítására set függvényeket hozunk létre, set kifelé mezp, viszont osztályon belül valósul meg
    set meresideje(ertek){ //beállítom
        if(isNaN(ertek.getTime())) throw new Error('Nem valid dátum érték')
        if(ertek > new Date()) throw new Error('Hibás érték!')
        this.#meresIdeje = ertek;
    }
    get meresIdeje(){ //kiolvasom
        return this.#meresIdeje;
    }

    set mertadat(ertek){
        if(!(typeof ertek === "number")) throw new Error('Az érték nem szám típusú!')
        if(ertek < -500 || ertek > 500) throw new Error('A érték nem a megfelő intervallumból származik!')
        this.#meresAdat = ertek;
    }
    get mertAdat(){
        return this.#meresAdat;
    }

    get getKelvin(){
        return this.#meresAdat * 274.15;
    }

    get getFahrenheit(){
        return this.#meresAdat * 1.8 + 32;
    }

    constructor(){
        if(arguments.length === 2){
            this.meresIdeje = arguments[0];
            this.meresAdat = arguments[1];
        }
        else if(arguments.length === 7){
            let datum = new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7])
            this.meresIdeje = datum
            this.meresAdat = arguments[5]
        }
        else{
            throw new Error('Hibás a paraméterszám!')
        }
    }
}

let adat = new MeresiAdat();
adat.meresIdeje = newDate(); 
adat.mertAdat = -23;
