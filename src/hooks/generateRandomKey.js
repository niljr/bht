function randomString() {
    let str = "";
    let i = 0;
    const len = 20;
    for (; i++ < len;) {
        var r = Math.random() * (62 - 0) + 0 << 0;
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str;
}

function generateRandomKey() {
    return async function (hookDetails) {
        const newData = { key: randomString(), isAvailable: true};
        hookDetails.data = Object.assign({}, hookDetails.data, newData);
        return hookDetails;
    }
}

export default generateRandomKey;