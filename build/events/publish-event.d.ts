import { Stan } from 'node-nats-streaming';
import { subjects } from './subjects';
interface Events {
    subject: subjects;
    data: any;
}
export declare abstract class publisher<T extends Events> {
    private client;
    abstract subject: T['subject'];
    constructor(incomingClient: Stan);
    publish(data: T['data']): Promise<unknown>;
}
export {};
