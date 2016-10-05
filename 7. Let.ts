/* Variables defined with 'let' inside of blocks don't 
   change the value of variables outside of the blocks: */

let sampLet = 123;

if (true) {
    let sampLet = 456;
}

/* Normally 'sampLet' should equal 456 by now, but it doesn't, thanks to let!: */

document.write('sampLet: ' + sampLet + '<br/>');


/* ------------------- Now with var ------------------------- */

var sampLet = 123;

if (true) {
    var sampLet = 456;
}

/* 'sampLet'' now equals 456 because of 'var': */

document.write('sampLet: ' + sampLet + '<br/>');