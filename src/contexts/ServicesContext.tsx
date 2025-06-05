import { createContext, ReactNode, useCallback, useState } from 'react';
import { IServiceContext } from '@/interfaces/contexts/IServiceContext';
import { IService } from '@/interfaces/models/data';
import { contactService } from '@/services/contact.service';
import { IContactMessage } from '@/interfaces/models/contact';

export const ServiceContext = createContext<IServiceContext | null>(null);

type IProps = {
    children: ReactNode;
};

export function ServicesProvider({ children }: IProps) {
    const [currentService, setCurrentService] = useState<IService | null>(null);

    const handleSendMessage = useCallback(async (payload: IContactMessage) => {
        try {
            await contactService.sendMessage(payload);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const contextValue = {
        currentService,
        setCurrentService,
        handleSendMessage,
    };

    return <ServiceContext.Provider value={contextValue}>{children}</ServiceContext.Provider>;
}
