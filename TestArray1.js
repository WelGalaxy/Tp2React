
var tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log('_____________________________________');
console.log('Ordre du tableau');
function OrdreTab(){
    for(var i= 0; i< tab.length; i++){
        console.log(tab[i]);
    }
}

console.log('_____________________________________');
console.log('Ordre inverse du tableau');

function OrdreInverse(){
for(var i= tab.length; i >=0; i--){
    console.log(tab[i]);
    }
}

console.log('_____________________________________');
console.log('Entiers supérieurs à 3');
function Sup3(){
    for(var i= 0; i< tab.length; i++){
        if(tab[i]> 3 ){
            console.log(tab[i]);
        }
    }
}

console.log('_____________________________________');
console.log('Entiers pairs ');
function getPairs(){
    for(var i= 0; i< tab.length; i++){
        if(tab[i]%2 == 0 ){
            console.log(tab[i]);
        }
    }
}

console.log('_____________________________________');
console.log('Plus grand élément du tableau ');
function plusGrand(){
    var plusGrand = 0;
    for(var i= 0; i< tab.length; i++){
        if(tab[i] > plusGrand ){
            plusGrand = tab[i];
            console.log(plusGrand);
        }
    }
    console.log('Le plus grand nb est ',plusGrand);
}

console.log('_____________________________________');
console.log('Plus petit élément du tableau ');

function plusPetit(){
var plusGrand = 0;
var plusPetit = 0
for(var i= 0; i< tab.length; i++){
    if(tab[i] > plusGrand ){
        plusGrand = tab[i];
    }
}

for(var i =0; i<tab.length; i++){
    if(tab[i]< plusGrand){
        plusPetit = tab[i];
        console.log(plusPetit);
        plusGrand = plusPetit;
    }
}
console.log('Le plus petit est ', plusPetit);
}