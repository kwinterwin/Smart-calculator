class SmartCalculator {
  constructor(initValue) {
    this.init = initValue;
    this.operations = [];
  }

  get result() {
    let rpn = [this.init];
    let ops = [];

    this.operations.forEach(function(op) {
      // if (ops.length!=0 && (ops[ops.length - 1]).priority == op.priority){
      //   rpn.push(ops.pop().op);
      //   ops.push(op);
      //   rpn.push(op.val);
      // }
      // else if (ops.length!=0 && (ops[ops.length - 1]).priority > op.priority){
      //   rpn.push(op.val);
      //   rpn.push(op.op);
      // }
      while (ops.length!=0 && (ops[ops.length - 1]).priority <= op.priority) {
        rpn.push(ops.pop().op);
      }
      // else{
      //   ops.push(op);
      //   rpn.push(op.val);
      // }
 
      ops.push(op);
      rpn.push(op.val);
      
    });
    
    console.log(ops);

    while (ops.length!=0) {
      rpn.push(ops.pop().op)
    }

    

    let res = [];
    rpn.forEach(function(token) {
      if (typeof token === 'function') {
        res.push(token(res.pop(), res.pop()));
      } else {
        res.push(token);
      }
    });
    console.log(rpn);
    return res.pop();
  }

  add(val) {
    this.operations.push({
      op: (a, b) => a + b,
      priority: 2,
      val: val
    });
    return this;
  }
  subtract(val) {
    this.operations.push({
      op: (a, b) => b - a,
      priority: 2,
      val: val
    })
    return this;
  }
  multiply(val) {
    this.operations.push({
      op: (a, b) => a * b,
      priority: 1,
      val: val
    })
    return this;
  }
  devide(val) {
    this.operations.push({
      op: (a, b) => Math.floor(b / a),
      priority: 1,
      val: val
    })
    return this;
  }

  pow(val) {
    this.operations.push({
      op: (a, b) => Math.pow(b,a),
      priority: 0,
      val: val
    })
    return this;
  }
  valueOf() {
    return this.result;
  }
}

module.exports = SmartCalculator;
