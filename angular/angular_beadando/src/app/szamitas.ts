export function szazalekSzamol(f: any): number {
    let pontok: number[] = Object.values(f.value)
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      sum = sum + pontok[i]
    }
    let sz = Math.round(sum / 150 * 100)
    return sz
  }

export function jegySzamol(eredmeny_szazalek: number) {
    if (eredmeny_szazalek < 24) return 1 + ' (elégtelen)'
    if (eredmeny_szazalek < 33) return 2 + ' (elégséges)'
    if (eredmeny_szazalek < 47) return 3 + ' (közepes)'
    if (eredmeny_szazalek < 60) return 4 + ' (jó)'
    else return 5 + ' (jeles)'
  }