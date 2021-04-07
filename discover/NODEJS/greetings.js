const getFlagValue = require('./flags')
console.log(`Hi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);
// - on Terminal:
// node greetings --name "Marcelo Peralta" --greeting "How are you?"