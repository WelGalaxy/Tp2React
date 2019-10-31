var tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log('_____________________________________');
console.log('Calcul de la moyenne');
var moyenne = 0;
for(var i= 0; i < tab.length; i++){
    moyenne += tab[i];
}
moyenne = moyenne / tab.length;
console.log('La moyenne est ', moyenne);

console.log('_____________________________________');
console.log('Index de 15');
var index = 0;
for(var i=0; i<tab.length;i++){
    if(tab[i]== 15 ){
        index = i;
    }
}
console.log('Index = ', index);

console.log('_____________________________________');
console.log('Entier en double');
nbDoublons = 0;
totalNbDoublons = 0;
for(var i =0; i<tab.length; i++){
    for(var y=0; y<tab.length; y++){
        if(tab[i]=tab[y]){
            nbDoublons ++;
        }
    }
    if(nbDoublons == 2){
        totalNbDoublons ++;
    }
}
totalNbDoublons = totalNbDoublons /2;
console.log('Le nombre de doublon est de ',totalNbDoublons);
