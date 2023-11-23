function getKodok(adatok){
    const kodok = [];
    for(let i = 0; i < adatok.length; i++){
        if(kodok.indexOf(adatok[i].kod) === -1){
            kodok.push(adatok[i].kod);
        }
    }
    return kodok;
}

function getMax(adatok, ev = new Date().getFullYear()){
    let obj = {};
    const kodok = getKodok(adatok);
    
    kodok.forEach(
        (aktKod, aktKodIndex) => {
            let maximum = null;
            adatok.forEach(
                (aktAdat, aktAdatIndex) => {
                    if( aktAdat.datum.getFullYear() === ev &&
                        aktAdat.kod === aktKod && 
                        (maximum === null || maximum < aktAdat.homerseklet)){
                            maximum = aktAdat.homerseklet;
                        }
                }
            )
            obj = {
                ...obj,
                [aktKod]: maximum
            }
        }
    );
    return obj;
}

function getNapiAtlag(adatok, datum, kod){
    let sum = 0;
    let db = 0;

    for(let i = 0; i < adatok.length; i++){
        if( adatok[i].kod === kod && 
            adatok[i].datum.getFullYear() === datum.getFullYear() && 
            adatok[i].datum.getMonth() === datum.getMonth() && 
            adatok[i].datum.getDate() === datum.getDate()){
            sum += adatok[i].homerseklet;
            db++;
        }
    }
    return sum / db;
}

function getAtlag(adatok, ev = 2022){
    let obj = {}
    const kodok = getKodok(adatok);
    for(let i = 0; i < kodok.length; i++){
        const napiAtlag = [];
        const voltMarDatum = [];
        for(let j = 0; j < adatok.length; j++){
            if(adatok[j].kod === kodok[i] && adatok[j].datum.getFullYear() === ev){
                const d = new Date(
                    adatok[j].datum.getFullYear(), 
                    adatok[j].datum.getMonth(),
                    adatok[j].datum.getDate()
                );
                if(!voltMarDatum.includes(d)){
                    napiAtlag.push(getNapiAtlag(adatok, d, adatok[j].kod));
                    voltMarDatum.push(d);
                }
            }
        }
        
        let sum = 0;
        napiAtlag.forEach((ertek) => {sum += ertek});
        
        const value = sum / napiAtlag.length;
        obj = {
            ...obj, 
            [kodok[i]]: isNaN(value) ? null : value
        }
    }   
    console.log(obj);
}

function getMin(adatok, datum){
    let min = null;
    for(let i = 0; i < adatok.length; i++){
        if(adatok[i].datum.getFullYear() === datum.getFullYear() && 
           adatok[i].datum.getMonth() === datum.getMonth() && 
           adatok[i].datum.getDate() === datum.getDate()){

            if(min == null || adatok[i].homerseklet < min){
                min = adatok[i].homerseklet;
            }
        }
    }
    return min;
}


function getLeghidegebb(adatok, datum){
    if(arguments.length !== 2) throw new Error('A híváshoz két paraméter kell!');
    const min = getMin(adatok, datum);
    const t = [];

    for(let i = 0; i < adatok.length; i++){
        if( adatok[i].datum.getFullYear() === datum.getFullYear() && 
            adatok[i].datum.getMonth() === datum.getMonth() && 
            adatok[i].datum.getDate() === datum.getDate() && 
            min == adatok[i].homerseklet && 
            t.indexOf(adatok[i].kod) === -1){
                t.push(adatok[i].kod);
        }
    }

    return t;
}

getLeghidegebb2 = (adatok, datum) => {
    if(adatok === undefined || datum === undefined) 
    throw new Error('A híváshoz két paraméter kell!');

}






