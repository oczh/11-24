function mindenHetSzerepelE(adat){
    let benneVan = false;
    if(arguments.length !== 1) return benneVan
    if(typeof arguments !== ('object')) return benneVan
    let hetek = (Object.keys(adat))
    for(let i = 0; i < 52; i++){
        if((i + 1) != hetek[i]){
            return 'A(z) ' + hetek[i] + '. héten nem került rögzítésre adat.'   
        }
        else {
                benneVan = true;
            }
        //hetek[i] = parseInt(hetek[i])
        //console.log((hetek.includes(i + 1)))
        //if(!(hetek.includes(i + 1))){
        //    return 'A(z) ' + hetek[i] + '. héten nem került rögzítésre adat.'
        //}
    }
    return benneVan;
}

function hibasSzamok(adat){
    if(arguments.length !== 1) throw new Error ('A függvény csak egy paraméterrel hívható');
    let obj = {};
    for(let i = 1; i <= 90; i++){
        obj[i] = null;
    }
    for(let i = 1; i <= Object.keys(adat).length; i++){
        let hetiNyeroSzamok = adat[i];
        for(let j = 0; j < hetiNyeroSzamok.length; j++){
            for(let k = j+1; k <= hetiNyeroSzamok.length; k++){
                if(hetiNyeroSzamok[j] === hetiNyeroSzamok[k]){
                    if(obj[hetiNyeroSzamok[j]] == null){
                        obj[hetiNyeroSzamok[j]] = [];
                    }
                    obj[hetiNyeroSzamok[j]].push(i);
                }
            }
        }
    }
    return obj;
}

function legtobbszorKihuzott(adat){
    if(arguments.length !== 1) throw new Error ('A függvény csak egy paraméterrel hívható');
    let obj = {};
    for(let i = 1; i <= 90; i++){
        obj[i] = 0;
    }
    for(let i = 1; i <= Object.keys(adat).length; i++){
        for(let j = 0; j < adat[i].length; j++){
            obj[adat[i][j]]++;
        }
    }
    let legtobbszorTomb = [];
    let hanyszoTomb = Object.values(obj);
    for(let i = 0; i < hanyszoTomb.length; i++){
        if(hanyszoTomb[i] == Math.max(...hanyszoTomb)){
            legtobbszorTomb.push(i + 1)
        }
    }
    alert('A legtöbbször kihúzott szám: ' + Math.max(...legtobbszorTomb))
    return Math.max(...legtobbszorTomb)
}