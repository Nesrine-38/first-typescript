/*let age:number[] =[20, 25, 30, 35, 17];

for (let items = 0; items < age.length; items++) {
    if (age[items] >= 18 ){
        console.log(`welcome`);
    }else{
        console.log(`${items} is too young`);
    }
}*/ let list = [];
while(true){
    let util = prompt("utilisateur.ice"); // recupere la variable 
    if (util != "") {
        list.push(util); // la mettre à l'interieur
        console.log(list);
        for(let items = 0; items < list.length; items++)console.log(list[items], list[items].length);
         // affichage des items ainsi leurs longueur
    } else break;
}
let personne = {
    prenom: "nesrine",
    nom: "Ishak",
    age: 25
};
console.log(personne.nom);

//# sourceMappingURL=exohtml.3f067f2d.js.map
