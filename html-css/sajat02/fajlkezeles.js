function feldolgoz(data){
    let sorok = data.split('\r\n')
    //let kulcsok = sorok[0].split(';')
    let meresek = []
    for(let i = 1; i < sorok.length; i++){
        let meresAdat = sorok[i].split(';')
        let meres = {
            kod : meresAdat[0],
            datum : new Date(meresAdat[1], meresAdat[2]-1, meresAdat[3], meresAdat[4], meresAdat[5]),
            homerseklet: meresAdat[6]
        }
        //let meres = {}
        //meres[kulcsok[0]] = meresAdat[0]
        //meres.datum = new Date(meresAdat[1], meresAdat[2]-1, meresAdat[3], meresAdat[4], meresAdat[5])
        //meres[kulcsok[6]] = meresAdat[6]
        meresek.push(meres)
    }
    //console.log(meresek)
    return meresek
}

function legmelegebb(data, ev = new Date().getFullYear()){
    let obj = {}
    for(let i = 0; i < data.length; i++){
        obj[data[i].kod] = null;
        if(ev == (data[i].datum).getFullYear()){
            if(obj[data[i].kod] === null 
                    || parseFloat(data[i].homerseklet) < obj[data[i].kod]){
                obj[data[i].kod] = parseFloat(data[i].homerseklet);   
            }
        }
    }
    console.log(obj)
    return obj
}

function evesAtlag(data, ev = 2022){
    let obj = {}
    for(let i = 0; i < data.length; i++){
        let nap = ((data[i].datum).getMonth() + 1) + '_' + (data[i].datum).getDate()
        if(!(data[i].kod in obj)){
            obj[data[i].kod] = null;
        }
        if(ev == (data[i].datum).getFullYear()){
            if(obj[data[i].kod] === null){
                obj[data[i].kod] = {}
            }
            if(!(nap in obj[data[i].kod])){
                    obj[data[i].kod][nap] = [];
            }
            obj[data[i].kod][nap].push(parseFloat(data[i].homerseklet));   
        }
    }
    //console.log(Object.keys(obj), Object.values(obj)[0])
    for(let i = 0; i < Object.values(obj).length; i++){
        if(Object.values(Object.values(obj)[i]) > 1){
            //még értékül adni a megfelelő kulcsnak
            //console.log(atlag(Object.values(Object.values(obj)[i])))
        }
    }
    console.log(obj)
    return obj
}

function atlag(arr){
    let osszeg = 0;
    for(let i = 0; i  < arr.length; i++){
        osszeg = osszeg + arr[i];
    }
    return osszeg / arr.length
}

function evente_hanyNapon_meres(data){
    console.log(data)
    let obj = {};
    for(let i = 0; i < data.length; i++){
        if(!(data[i].kod in obj)){
            obj[data[i].kod] = {};
        }    
        if(!(data[i].kod[(data[i].datum).getFullYear()] in obj[data[i].kod])){
            obj[data[i].kod][(data[i].datum).getFullYear()] = 0;
        }
        obj[data[i].kod][(data[i].datum).getFullYear()]++
    }
    console.log(obj)
    return obj;
}

function leghidegebb_adottNapon(data, adottNap){
    let nap = new Date(adottNap);
    let leghidegebbAdatok = [];
    let leghidegebb = 0;
    for(let i = 0; i < data.length; i++){
        if((data[i].datum).getFullYear() == nap.getFullYear() &&
        (data[i].datum).getMonth() == nap.getMonth() &&
        (data[i].datum).getDate() == nap.getDate()){
            if(parseFloat(data[i].homerseklet) < leghidegebb){
                leghidegebb = parseFloat(data[i].homerseklet);
                leghidegebbAdatok = []
                leghidegebbAdatok = [data[i].kod, data[i].homerseklet];
            }
            else if(data[i].homerseklet == leghidegebb){
                leghidegebbAdatok.push([data[i].kod, data[i].homerseklet]);
            }
        }    
    }
    console.log(leghidegebbAdatok)
    return leghidegebbAdatok;  
}

function hanyszor_homerseklet(data, hom = 0){
    let obj = {}
    for(let i = 0; i < data.length; i++){
        if(hom == data[i].homerseklet){
            if(!(data[i].kod in data)){
                obj[data[i].kod] = 0
            }
            obj[data[i].kod]++
        }
    }
    console.log(obj)
    return obj
}



