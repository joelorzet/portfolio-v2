import { IContactMessage } from '@/interfaces/models/contact';
import { apiService } from './api.service';
import { IContactService } from '@/interfaces/services/IContactService';
import { IAPIService } from '@/interfaces/services/IAPIService';

class ContactService implements IContactService {
    constructor(private readonly apiService: IAPIService) {}

    async sendMessage(payload: IContactMessage) {
        await this.apiService.post('contact', payload);
    }
}

export const contactService = new ContactService(apiService);
