function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().map(Number);
}
      
console.log(reverse_a_number(258961)); // 169852