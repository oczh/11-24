

class AllomasonMertAdat extends MeresiAdat{
    #meresiPont;

    get meresiPont(){
        return this.#meresiPont;
    }

    set meresiPont(ertek){
        if(!ertek.match('^[A-Z]{3}-[0-9]{2}$')){
            throw new Error('A mérési pont azonosítója nem felel meg az elvársoknak!');
        }

        this.#meresiPont = ertek;
    }

    toString(){
        return super.toString() + ", mérési pont: " + this.#meresiPont;
    }

    constructor(...params){
        const params2 = [...params];
        params2.pop();
        super(...params2);
        this.meresiPont = params[params.length - 1];
    }
}