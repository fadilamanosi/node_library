"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = exports.decrypt = void 0;
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);
const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return JSON.stringify({
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    });
};
exports.encrypt = encrypt;
const decrypt = (hash) => {
    var hashed = JSON.parse(hash);
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hashed.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hashed.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};
exports.decrypt = decrypt;
