import { IContactMessage } from '@/interfaces/models/contact';
import { HttpService, httpService } from './http.service';
import { IContactService } from '@/interfaces/services/IContactService';

class ContactService implements IContactService {
    constructor(private readonly httpService: HttpService) {}

    async sendMessage(payload: IContactMessage) {
        await this.httpService.post('contact', payload);
    }
}

export const contactService = new ContactService(httpService);
