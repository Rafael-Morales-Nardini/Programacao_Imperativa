const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function determinaVencedor(participante1, participante2) {
    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i < participante1.length; i++) {
        if(participante1[i] > participante2[i]){
            p1++;
        } else {
            p2++;
        }
    }
    return `Participante 1: ${p1}  Participante 2: ${p2}`;
}

console.log(
    determinaVencedor(alicia, bob)
);

function digitalHouse(n1, n2) {
    let count = 0;
    let s1 = "Digital";
    let s2 = "House";
    while (count <= 100) {
        if ((count % n1) == 0 && (count % n2) == 0) {
            console.log(s1, s2);
        } else if (count % n1 == 0) {
            console.log(s1);
        } else if (count % n2 == 0) {
            console.log(s2);
        } else {
            console.log(count);
        }
        count++;
    }
}

digitalHouse(2, 3);

function somaArray(elemento) {
    let total = 0;
    for (let i = 0; i < elemento.length; i++) {
        total += elemento[i];
    }
    return total;
}

console.log(
    somaArray([8, 9, 2, 3, 6, 45])
);
