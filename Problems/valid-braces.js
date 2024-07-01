function validBraces(braces) {
    let stack = [];
    let check = 0;

    for (let i = 0; i < braces.length; i++) {
        stack.push(braces[i])
        check++
        if((stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') 
        ||(stack[stack.length - 2] === '{' && stack[stack.length - 1] === '}')
        || (stack[stack.length - 2] === '[' && stack[stack.length - 1] === ']')) {
            stack.pop()
            stack.pop()
            check = stack.length
    }
        
    }

    return check === 0; // All opening parentheses have been matched
}

// Example usage:
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])"));
console.log(validBraces("(}")); 
console.log(validBraces("[(])")); 
