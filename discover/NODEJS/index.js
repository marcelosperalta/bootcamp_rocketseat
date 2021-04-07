// console.log("Hi");

// process.stdout.write("Test \n")
// - on Terminal
// node index.js

const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
]

const ask = ( index = 0 ) => {
    process.stdout.write(questions[index] + "\n")
}
ask()  // Question 1
//ask(3) // Question 4

const answers = []
process.stdin.on('data', data => {
    // process.stdout.write(data.toString().trim() + '\n')
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else  {
        //console.log(answers);
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    Marcelo,

    Question 1:
    ${answers[0]}

    Question 2:
    ${answers[1]}

    Question 3:
    ${answers[2]}

    Question 4:
    ${answers[3]}

    Question 5:
    ${answers[4]}
    `)
})