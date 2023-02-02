let code = "var x = (5 + 6) * [3 + 4];";

function balancedParenthesis(code) {
  let stack = [];
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < code.length; i++) {
    let char = code[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      let last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(balancedParenthesis(code));
// Output: true


//Anden metode

let str = "(()[]{[]})"

let balanceString = function(s){
    let words = s.split("");
    let arr = new Array;
    for (let i = 0; i < words.length; i++){
        if (words[i] === "("){
            arr.push(words[i])
        }
        if (words[i] === ")"){
            if (arr.includes("(")){
                arr.pop("(")
            } else {
                arr.push(words[i])
            }
        }
        if (words[i] === "{"){
            arr.push(words[i])
        }
        if (words[i] === "}"){
            if (arr.includes("{")){
                arr.pop("{")
            }else {
                arr.push(words[i])
            }
        }
        if (words[i] === "["){
            arr.push(words[i])
        }
        if (words[i] === "]"){
            if (arr.includes("[")){
                arr.pop("[")
            }else {
                arr.push(words[i])
            }
        }


    }
    if (arr.length === 0){
        console.log("Is balanced")
    } else {
        console.log("Is not balanced")
    }

}
balanceString(str);
