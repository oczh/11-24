function konvertal(csvSzoveg){
    if(arguments.length !== 1) throw new Error ('A függvény csak 1 paraméterrel hívható!')
    if(typeof csvSzoveg !== ('string')) throw new Error ('A paraméter típusa csak szöveg lehet!')
    if(csvSzoveg.length == 0) throw new Error ('A paraméter nem lehet üres!')
    
    let obj = {}
    let sorok = csvSzoveg.split("\r\n")
    for(let i = 1; i < sorok.length; i++){
        let elemek = sorok[i].split('\t')
        obj[elemek[0]] = [parseInt(elemek[1]), parseInt(elemek[2]), parseInt(elemek[3]), parseInt(elemek[4]), parseInt(elemek[5])];
    }
    return obj;
}