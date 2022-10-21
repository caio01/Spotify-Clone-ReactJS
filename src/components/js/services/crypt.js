var CryptoJS = require("crypto-js")

// Encrypt
export function encrypt(data) {
    var ciphertext = CryptoJS.AES.encrypt(data, 'my-secret-key@123').toString()
    return ciphertext
}
// Decrypt
export function decrypt(data) {
    var bytes = CryptoJS.AES.decrypt(data, 'my-secret-key@123')
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return decryptedData
}

export default encrypt