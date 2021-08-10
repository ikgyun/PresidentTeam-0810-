const crypto = require('crypto');
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

function jwtId(AccessToken) {
    let [header, payload, sign] = AccessToken.split('.');
    let { idx, exp } = JSON.parse(Buffer.from(payload, 'base64').toString())
    return idx;
}

module.exports = jwtId;