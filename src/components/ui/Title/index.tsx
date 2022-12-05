import { FC, ReactNode } from 'react';
import styles from './index.module.css';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextProps {
    children: ReactNode;
    size: TextSize;
    className?: string;
}

export const Title: FC<TextProps> = ({ children, size, className }) => {
    const sizeClassName: Record<TextSize, string> = {
        xs: styles.titleXs,
        sm: styles.textSm,
        md: styles.textMd,
        lg: styles.textLg,
        xl: styles.titleXl,
    };

    const cName = `${styles.title} ${sizeClassName[size]} ${className ?? ''}`;

    return <span className={cName}>{children}</span>;
};
