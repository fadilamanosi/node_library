"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
class listener {
    constructor(incomingClient) {
        this.ackWait = 5 * 1000;
        this.client = incomingClient;
    }
    subscriptionOptions() {
        return this.client
            .subscriptionOptions()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDeliverAllAvailable()
            .setDurableName(this.queueGroupName);
    }
    listen() {
        const sus = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        sus.on('message', (msg) => {
            console.log(`subject: ${this.subject} : ${this.queueGroupName}`);
            const parsedData = this.parsedMessage(msg);
            this.onMessage(parsedData, msg);
        });
    }
    parsedMessage(msg) {
        const data = msg.getData();
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf-8'));
    }
}
exports.listener = listener;
