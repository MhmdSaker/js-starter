function validParentheses(parens) {
    let stack = [];

    for (let char of parens) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false; // No matching opening parenthesis
            }
            stack.pop();
        }
    }

    return stack.length === 0; // All opening parentheses have been matched
}

// Example usage:
console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); // false
console.log(validParentheses("(")); // false
console.log(validParentheses("(())((()())())")); // true
console.log(validParentheses("")); // true (empty string is considered balanced)
