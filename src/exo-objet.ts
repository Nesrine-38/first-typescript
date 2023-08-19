interface Dog{
    name:string;
    breed:string;
    hunger:number;
}
let chien:Dog ={
    name:"leo",
    breed:"chow chow",
    hunger:50,

}

let kalb:Dog ={
    name:"BOUSSA",
    breed:"chow chow",
    hunger:70,

}

function feedDog(arg:Dog){

    if(arg.hunger >= 0){
        arg.hunger -=50;
        console.log( `${arg.name}` , "is eating, good dog");
    }else{
        console.log("this dog is not hungry");
    }
}
console.log(feedDog(chien));
console.log(feedDog(kalb));


// 2eme solution 
interface Dog{
    name:string;
    breed:string;
    hunger:number;
}
let chien1:Dog ={
    name:"leo",
    breed:"chow chow",
    hunger:50,
}
function feedDogg(dogtofeed:Dog){
    dogtofeed.hunger -= 50; 
    console.log(`${dogtofeed.name}, is eating`);
}
console.log(feedDogg(chien1));

