
function Pyramid(r) // AJOUTER LE PARAMETRE LIGNE R= NBRE DE LIGNES
{
for (let i = 0; i < r; i++) { // POUR I (compteur )ALLANT DE 0 JUSQU'A I INFERIEUR à NBRE DE LIGNES
      let put = ''; // declare l'ESPACE
        for (let j =0; j < r - i; j++) // pour j allant de 0 jusqu'a nbre de ligne - LE COMPTEUR 
        put += ' '; // incrementer l'espace 


       for (let k = 0; k <= i*2; k++)  // pour k allant de 0 à i multiple par 2 
        put += '*'; // incremente l'etoile
        console.log(put);  // l4afficher 
     
  }}

Pyramid(5);// appel de la fonction 


/* ON UTILISE LES FONCTIONS POUR EVITER LA REPETITION 
ON L'APPELLE à CHAQUE FOIS QU'ON A BESOIN
c'est un bloc de code qui assure la solution d'un prb   */
