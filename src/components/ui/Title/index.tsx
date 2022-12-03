import { FC, ReactNode } from 'react';
import styles from './index.module.css';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextProps {
    children: ReactNode;
    size: TextSize;
}

export const Title: FC<TextProps> = ({ children, size }) => {
    const sizeClassName: Record<TextSize, string> = {
        xs: styles.titleXs,
        sm: styles.textSm,
        md: styles.textMd,
        lg: styles.textLg,
        xl: styles.titleXl,
    };

    const className = `${styles.title} ${sizeClassName[size]}`;

    return <span className={className}>{children}</span>;
};
