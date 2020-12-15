

const hump2underline = str => {
    return str.replace(/\B([A-Z])/g, '_$1').toLowerCase();
}

module.exports = {
    hump2underline,
}