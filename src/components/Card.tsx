import { ReactNode } from "react";

interface CardProp {
    children: ReactNode,
    className: string
}

const Card: React.FC<CardProp> = ({ children, className }) => {
    return (
        <div className={`p-4 border rounded-3xl shadow-sm ${className}`}>
            {children}
        </div>
    );
};

export default Card;
