class SmartCalculator {
  constructor(initValue) {
    this.init = initValue;
    this.operations = [];
  }

  get result() {
    let valueFunction = [this.init];
    let arrayObject = [];

    this.operations.forEach(function(object) {
      // if (arrayObject.length!=0 && (arrayObject[arrayObject.length - 1]).priority == object.priority){
      //   valueFunction.push(arrayObject.pop().op);
      //   arrayObject.push(object);
      //   valueFunction.push(object.val);
      // }
      // else if (arrayObject.length!=0 && (arrayObject[arrayObject.length - 1]).priority > object.priority){
      //   valueFunction.push(object.val);
      //   valueFunction.push(object.op);
      // }
      while (arrayObject.length!=0 && (arrayObject[arrayObject.length - 1]).priority <= object.priority) {
        valueFunction.push(arrayObject.pop().op);
      }
      // else{
      //   arrayObject.push(object);
      //   valueFunction.push(object.val);
      // }
 
      arrayObject.push(object);
      valueFunction.push(object.val);
      
    });
    

    while (arrayObject.length!=0) {
      valueFunction.push(arrayObject.pop().op)
    }

    

    let res = [];
    valueFunction.forEach(function(token) {
      if (typeof token === 'function') {
        res.push(token(res.pop(), res.pop()));
      } else {
        res.push(token);
      }
    });
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
