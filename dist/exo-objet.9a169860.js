let chien = {
    name: "leo",
    breed: "chow chow",
    hunger: 50
};
let kalb = {
    name: "BOUSSA",
    breed: "chow chow",
    hunger: 70
};
function feedDog(arg) {
    if (arg.hunger >= 0) {
        arg.hunger -= 50;
        console.log(`${arg.name}`, "is eating, good dog");
    } else console.log("this dog is not hungry");
}
console.log(feedDog(chien));
console.log(feedDog(kalb));
let chien1 = {
    name: "leo",
    breed: "chow chow",
    hunger: 50
};
function feedDogg(dogtofeed) {
    dogtofeed.hunger -= 50;
    console.log(`${dogtofeed.name}, is eating`);
}
console.log(feedDogg(chien1));

//# sourceMappingURL=exo-objet.9a169860.js.map
