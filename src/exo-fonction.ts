// la premiere question 
function greeting1()
{
    console.log("bonjour mon prenom");
}
greeting1();

//la 2eme question 

function greeting2(prenom:string)
{
    console.log("bonjour"+" "+ prenom);
    //console.log(`bonjour §{prenom}`);
}
greeting2("nesrine");
greeting2("jean");



// la 3eme question 
function greeting3(prenom:string):string
{
    return "bonjour" +" "+ prenom;

}
console.log(greeting3('nesrine'));


function greeting(prenom:string):string
{
    if(prenom.trim().length < 2 ){
//trim enleve les espaces 
throw new Error('please fix the  erreur');
    }
    return "bonjour" +" "+ prenom;

}
console.log(greeting('nesrine'));


function calcul(a:number , b:number, pre:string){

    if(pre == '+'){
    let sum=0 
    sum= a+b;
    return sum;
}else if (pre =='-'){
    let tra=0 
    tra= a-b;
    return tra;
} else if (pre == '*'){
    let mul=0 
    mul= a-b;
    return mul;
}else{
    if(b === 0){
        throw new Error('oups Divison par zero');
    }
    let div=0 
    div= a/b;
    return div;

}
return NaN;
}
console.log(calcul(4,6,'+'));
console.log(calcul(9,0,'-'));
console.log(calcul(10,5,'*'));
console.log(calcul(9,3,'/'));



// si on veux lire un tableau de n elements 

let untableau:string[] = ['bonjour', 'true', '10'];


for (const item of untableau){
    console.log(item);
    
}


untableau.forEach((item)=>{
    console.log(item);
})

