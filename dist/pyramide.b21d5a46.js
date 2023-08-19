function Pyramid(r) {
    for(let i = 0; i < r; i++){
        var put = "";
        for(let j = 0; j < r - i; j++)put += " ";
        for(let k = 0; k <= i * 2; k++)put += "*";
        console.log(put);
    }
}
Pyramid(5); /*function pyramid(n) {
  for(let i=1; i<= n; i++){

    let repeat1 = ' '.repeat(n-i);

    let repeat2 = '*'. repeat(i*2 -1)
    console.log(str + str2 + str);

  }
}

pyramid(5);*/ 

//# sourceMappingURL=pyramide.b21d5a46.js.map
