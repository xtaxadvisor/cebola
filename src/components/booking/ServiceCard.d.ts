interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    onBook: () => void;
    popular?: boolean;
}
export declare function ServiceCard({ title, description, price, duration, features, onBook, popular }: ServiceCardProps): import("react/jsx-runtime").JSX.Element;
export {};
