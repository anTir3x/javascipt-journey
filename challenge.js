var obj = {
    name: "woo",
    age: 27,
    time: "wasted"
}

function test(obj,prop) {

    if (obj.hasOwnProperty(prop)) {
      return obj[prop];
    } else {
        return "Not Found"
    }
}

console.log(test({
    name: "woo",
    age: 27,
    time: "wasted"
}, "age"));