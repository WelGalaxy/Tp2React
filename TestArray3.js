var tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function sortTab(leTab){
temp = 0;
do {
    change = false;
    for (i = 0; i < leTab.length - 1; i++) {
        if (leTab[i] > leTab[i + 1]) {
            temp = leTab[i];
            leTab[i] = leTab[i + 1];
            leTab[i + 1] = temp;
            change = true;
        }
    }
} while (change);

console.log(tab);
}