//#!/user/bin/env node
//"use strict";
const args = require('minimist')(process.argv.slice(2),{

});
const printHelp=()=>{
    console.log('COMMAND LINE USAGE');
    console.log('   scripts.js --help');
    console.log('');
    console.log('');
}
printHelp()
console.log(args)