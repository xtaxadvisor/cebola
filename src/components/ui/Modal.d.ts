import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
export declare function Modal({ isOpen, onClose, title, children }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
