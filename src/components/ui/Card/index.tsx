import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface CardProps {
    children: ReactNode;
    className?: string;
    border?: boolean;
}

export const Card: FC<CardProps> = ({ children, border = false, className }) => {
    const cName = `${styles.card} ${className ?? ''} ${border ? styles.cardWithBorder : ''}`;

    return <div className={cName}>{children}</div>;
};
