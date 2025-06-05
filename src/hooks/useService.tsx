import { useContext } from 'react';
import { ServiceContext } from '@/contexts/ServicesContext';

export function useService() {
    const context = useContext(ServiceContext);

    if (!context) {
        throw new Error('useService must be used within a ServicesProvider');
    }

    return context;
}
