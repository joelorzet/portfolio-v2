import { IContactMessage } from '../models/contact';

export interface IContactService {
    sendMessage(payload: IContactMessage): Promise<void>;
}
