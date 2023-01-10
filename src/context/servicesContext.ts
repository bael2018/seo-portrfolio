import { createContext } from 'react';

export interface IServicesContext {
    isModal: boolean,
    isContent: boolean | number,
    isModalNavbar: boolean,
    setModal: () => void,
    setContent: (content: boolean | number) => void;
    setModalNavbar: (isOpen: boolean) => void
}

export const ServicesContext = createContext<IServicesContext | null>(null)