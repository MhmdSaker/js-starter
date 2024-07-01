function validParentheses(parens) {
    let stack = [];
    let check = 0;

    for (let i = 0; i < parens.length; i++) {
        stack.push(parens[i])
        check++
        if((stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')')) {
            stack.pop()
            stack.pop()
            check = stack.length
    }
        
    }

    return check === 0; // All opening parentheses have been matched
}

// Example usage:
console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))"));
console.log(validParentheses("(")); 
console.log(validParentheses("(())((()())())")); 
