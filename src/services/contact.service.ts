import { IContactMessage } from '@/interfaces/models/contact';
import { apiService } from './api.service';
import { IContactService } from '@/interfaces/services/IContactService';
import { IAPIService } from '@/interfaces/services/IAPIService';
import { HttpError } from '@/common/errors/request/http';
import { ContactBadRequestError } from '@/common/errors/services/contact.error';

class ContactService implements IContactService {
    constructor(private readonly apiService: IAPIService) {}

    async sendMessage(payload: IContactMessage) {
        try {
            await this.apiService.post('contact', payload);
        } catch (error) {
            if (error instanceof HttpError) {
                throw new ContactBadRequestError(error.message, error.status);
            }
        }
    }
}

export const contactService = new ContactService(apiService);
