import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
    const cName = `${styles.card} ${className ?? ''}`;

    return <div className={cName}>{children}</div>;
};
