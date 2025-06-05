import { IService } from '../models/data';

export interface IServiceContext {
    currentService: IService | null;
    setCurrentService: (service: IService | null) => void;
}
