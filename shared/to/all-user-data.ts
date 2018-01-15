import { Message } from './../modal/message';
import { Thread } from './../modal/thread';
import { Participant } from './../modal/participant';

export interface AllUserData {
    Participant: Participant[];
    threads: Thread[];
    Messages: Message[];
}