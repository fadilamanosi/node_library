import nats, { Message, Stan } from 'node-nats-streaming';
import { subjects } from './subjects';
interface Events {
    subject: subjects;
    data: any;
}
export declare abstract class listener<T extends Events> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    private client;
    protected ackWait: number;
    constructor(incomingClient: Stan);
    subscriptionOptions(): nats.SubscriptionOptions;
    listen(): void;
    parsedMessage(msg: Message): any;
}
export {};
