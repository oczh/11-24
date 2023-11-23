class MeresiAdat{
    #meresIdeje;
    #mertAdat;


    
    get meresIdeje(){
        return this.#meresIdeje;
    }
    set meresIdeje(ertek){
       
        if(!(ertek instanceof Date))
            throw new TypeError('Hibás típusú adat a dátum helyén!');
        if(isNaN(new Date(ertek.toLocaleDateString('hu-HU'))))
            throw new Error('A dátum típusú érték nem megfelelő!');
        const most = new Date();
        if(most < ertek)
            throw new RangeError('Az érték nagyobb az aktuális dátumnál');
        
        this.#meresIdeje = ertek;
    }


    get mertAdat(){
        return this.#mertAdat;
    }
    set mertAdat(ertek){
        if(isNaN(ertek))
            throw new TypeError('A mért adat típusa nem megfelelő!');
        if(ertek < -50)
            throw new RangeError('A mért adat nem lehet -50 alatt!');
        if(50 < ertek)
            throw new RangeError('A mért adat nem lehet 50 felett!');

        this.#mertAdat = Number(ertek);
    }


    toString(){
        return `Érték: ${this.#mertAdat}, idő: ${this.#meresIdeje.toLocaleDateString('hu-HU')}`;
    }

    getKelvin(){
        return this.#mertAdat * 274.15;
    }
    getFarenheit(){
        return this.#mertAdat * 1.8 + 32;
    }

    constructor(...params){
        if(params.length === 2){
            this.meresIdeje = params[0];
            this.mertAdat = params[1];
        }
        else if (params.length === 7){
            this.meresIdeje = new Date(
                params[0], params[1], params[2], params[3], params[4], params[5]
            );
            this.mertAdat = params[6];
        }
        else{
            throw new Error('A konstruktor csak 2 vagy 7 paraméterrel hívható!');
        }
    }





}