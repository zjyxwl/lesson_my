let str = "how are you doing today";
console.log(Math.min(...str.split(" ").map(item => item.length)))
