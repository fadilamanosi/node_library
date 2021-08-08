"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisher = void 0;
class publisher {
    constructor(incomingClient) {
        this.client = incomingClient;
    }
    publish(data) {
        return new Promise((resolve, reject) => {
            const info = JSON.stringify(data);
            this.client.publish(this.subject, info, (err) => {
                if (err) {
                    return reject;
                }
                console.log(`Event: ${this.subject} published`);
                resolve();
            });
        });
    }
}
exports.publisher = publisher;
