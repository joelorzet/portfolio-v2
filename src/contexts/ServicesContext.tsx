import { createContext, ReactNode, useState } from 'react';
import { IServiceContext } from '@/interfaces/contexts/IServiceContext';
import { IService } from '@/interfaces/models/data';

export const ServiceContext = createContext<IServiceContext | null>(null);

type IProps = {
    children: ReactNode;
};

export function ServicesProvider({ children }: IProps) {
    const [currentService, setCurrentService] = useState<IService | null>(null);

    const contextValue = {
        currentService,
        setCurrentService,
    };

    return <ServiceContext.Provider value={contextValue}>{children}</ServiceContext.Provider>;
}
