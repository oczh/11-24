function feldolgoz(responseText){
    const tomb = []
    const sorok = responseText.split('\r\n');
    sorok.shift();

    for(let i = 0; i < sorok.length; i++){
        const mezok = sorok[i].split(';');

        const obj = {
            kod: mezok[0],
            datum: new Date(
                mezok[1],
                mezok[2] - 1, 
                mezok[3],
                mezok[4],
                mezok[5]
            ),
            homerseklet: Number(mezok[6])
        }
        tomb.push(obj);
    }

   return tomb;
}