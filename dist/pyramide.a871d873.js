function Pyramid(r) {
    for(let i = 0; i < r; i++){
        let put = ""; // declare l'ESPACE
        for(let j = 0; j < r - i; j++)put += " "; // incrementer l'espace 
        for(let k = 0; k <= i * 2; k++)put += "*"; // incremente l'etoile
        console.log(put); // l4afficher 
    }
}
Pyramid(5); // appel de la fonction 
 /* ON UTILISE LES FONCTIONS POUR EVITER LA REPETITION 
ON L'APPELLE à CHAQUE FOIS QU'ON A BESOIN
c'est un bloc de code qui assure la solution d'un prb   */ 

//# sourceMappingURL=pyramide.a871d873.js.map
