function ultra(){}
    ultra.prototype.ultraProp = true;

function Super(){}
    Super.prototype = new ultra()

function sub() {}
    sub.prototype = new Super()

var o = new sub();

console.log(o.ultraProp)