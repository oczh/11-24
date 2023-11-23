// js forrásállomány, amelyben a segédfüggvényeket definiáljuk  a későbbiekben, ha valamelyik 
// html-ben szereténk ezeket használni, csak be kell linkelni őket egy script tagben 

// visszaad egy véletlen egészt [min;max]-ról
function getVeletlenSzam(min, max){
    let szam = Math.floor(Math.random() * (max - min + 1) + min)
    return szam
}

// visszaad egy logikai értéket: a szam érték benne van-e a tömbben? 
function benneVan(tomb, szam){
    let elofordul = false 
    for(let i = 0; i < tomb.length; i++){
        if(tomb[i] === szam){
            elofordul = true
            break
        }
    }
    return elofordul
}  

// visszaad egy tömböt, amely db mennyiségű véletlen egészt tartalmaz ism. nélkül a [min,max]-ról 
function szamokGeneral(db, min, max){
    let szamok = []
    while(szamok.length !== db){
        let szam = getVeletlenSzam(min, max)

        if(!benneVan(szamok, szam)){
            szamok.push(szam)
        }
    }
    return szamok
}

// visszaad egy számot, amely a tomb paraméterben kapott tömb értékeinek osszegét tartalmazza 
function osszegez(tomb){
    let osszeg = 0 
    for(let i = 0; i < tomb.length; i++){
        osszeg = osszeg + tomb[i]
    }
    return osszeg
}

// Minimunkiválasztás: megkeressük egy tömb legkisebb elemét. 
// Feltételezem, hogy a tömb legelső eleme a legkisebb, végignézem az elemeket, és 
// ha van tőle kisebb, akkor ez lesz az új minimum érték. (minimumErtek)
function minimumErtek(tomb){
    if(tomb === undefined){ // ha nem kap értéket a tomb paraméter, akkor nem tudok dolgozni
        throw new Error('A függvénynek át kell adni egy paramétert!')
    }
    if(arguments.length !== 1){ // az fgv paraméterei kezelhetőek az arguments- tömbön keresztül is
        throw new Error('A függvények 1 paramétere van!')
    }

    // console.log(typeof tomb ) // alaprtípusok esetén jó (String, Number, Boolean, stb...)
    // console.log(typeof tomb[0])

    
    if(!(tomb instanceof Array)){ // megvizsgálom, hogy tömb legyen az adattípus
        throw new Error('A minimum keresés paramétere egy tömb!')
    }

    
    for(let i = 0; i < tomb.length; i++){
        if(typeof tomb[i] !== "number"){ // number: egészek és törtek 
            throw new Error('Minden tömbelemnek számnak kell lennie!')
        }
    }

    if(tomb.length === 0){
        throw new Error('A tömbben legalább egy elem, kell, hogy legyen!')
    }

    // feltételezem, hogy a legelső elem a legkisebb
    let min = tomb[0]
    for(let i = 1; i < tomb.length; i++){
        if(tomb[i] < min){ // ha az aktuális elem kisebb, mint a min érték, akkor megváltoztatom a min értékét
            min = tomb[i]
        }
    }
    return min // vissza a min értékét a hívás helyére 
}

// Közös elemek (metszet): Adott két tömb, a kimenetbe azok az elemek kerüljenek, amelyek midnkét
// tömbben legalább egyszer benne vannak. Kimenet: (név: metszet)
// - pontosan kettő tömb típusú paraméter kell 
// 1) készítek egy üres tömböt, 
// 2) bejárom az első paramétert, és ha az akt elem bennne van a 2. paraméterben kapott tömbbe
//    akkor belerakom a kimeneti tömbbe 
function metszet(a, b){
    if(arguments.length !== 2){ // két paraméterrel hívható 
        throw new Error('A metszet függvénynek két paraméterre van szüksége!')
    }
    if(!(a instanceof Array) || !(b instanceof Array)){
        throw new Error('A metszet függvénynek mindkét paramétere array típusú!')
    }

    let eredmeny = [] // ebbe gyűjtöm a közös elemeket
    for(let i = 0; i < a.length; i++){
        if(benneVan(b, a[i]) && !benneVan(eredmeny, a[i])){
            eredmeny.push(a[i])
        }
    }
    return eredmeny
}