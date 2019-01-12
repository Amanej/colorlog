// Colors from https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const colors = require('./lib/colors.js');
const colorify = (string,colorcode) => {
    const colorFunction = colors.filter(c => c.hex === colorcode)[0]
    let c = colorFunction.get();
    console.log(c, string, '\x1b[0m');
    return
}

module.exports = colorify;