import { createContext } from 'react';

export interface IServicesContext {
    isModal: boolean,
    isContent: boolean | number,
    setModal: () => void,
    setContent: (content: boolean | number) => void;
}

export const ServicesContext = createContext<IServicesContext | null>(null)