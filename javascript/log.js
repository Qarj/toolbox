const util = require('util');

function logPretty(obj) {
    let json = obj;
    try {
        if (typeof obj === 'string') json = JSON.parse(obj);
        console.log(util.inspect(json, { showHidden: false, depth: null, colors: true }));
    } catch (e) {
        console.log(obj);
    }
}

module.exports = { logPretty };
