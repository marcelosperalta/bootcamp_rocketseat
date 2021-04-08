/* 
Exercise:

    Create two JavaScript files

    - The first file will export a function called "getFlagValue()" 
      that will recive a String type argument.
      This function must search inside the array "process.argv"
      the flag (a String) and return the flag's value.

    - The second file will import the function and pass a flag.

    We will run in the terminal the second file giving the flags 
    "--name" and "--greeting" to see in the terminal a name and 
    a greeting.
*/

function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlagValue;