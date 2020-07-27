
function CoffeMake(){};

CoffeMake.prototype.on = function(){
    console.log("on")
}

CoffeMake.prototype.off = function(){
    console.log("off")
}

function KapelnaMachyna(){};

KapelnaMachyna.prototype = CoffeMake.prototype;
KapelnaMachyna.prototype.process = function() {
    console.log('kapelna')
}

function RizhkovaMachyna(){};
RizhkovaMachyna.prototype = CoffeMake.prototype;
RizhkovaMachyna.prototype.process = function() {
    console.log('rizhkova')
}

function KavoMachynka(){};
KavoMachynka.prototype = CoffeMake.prototype;
KavoMachynka.prototype.process = function() {
    console.log('kavo machyna')
}

const Kapla = new KapelnaMachyna;
const  Rizhok = new RizhkovaMachyna;
const KavoMachynaa = new KavoMachynka;


