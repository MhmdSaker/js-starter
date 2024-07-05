function rot13(message) {
    let chars = [];
    let arr = [];

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        console.log(charCode)

        // Check if the character is an uppercase letter
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 13) % 26) + 65;
        }
        // Check if the character is a lowercase letter
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + 13) % 26) + 97;
        }

        chars.push(charCode);
    }

    for (let i = 0; i < chars.length; i++) {
        arr.push(String.fromCharCode(chars[i]));
    }

    return arr.join('');
}

// Example usage:
console.log(rot13("Hello, World!")); // Uryyb, Jbeyq!
console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // NOPQRSTUVWXYZABCDEFGHIJKLM
console.log(rot13("abcdefghijklmnopqrstuvwxyz")); // nopqrstuvwxyzabcdefghijklm
console.log(rot13("12345!@#$%")); // 12345!@#$%






