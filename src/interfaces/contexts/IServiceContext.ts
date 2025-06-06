import { IContactMessage } from '../models/contact';
import { IService } from '../models/data';

export interface IServiceContext {
    currentService: IService | null;
    setCurrentService: (service: IService | null) => void;
    handleSendMessage: (payload: IContactMessage) => Promise<void>;
}
