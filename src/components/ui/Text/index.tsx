import { FC, ReactNode } from 'react';
import styles from './index.module.css';

type TextSize = 'sm' | 'md' | 'lg';
type TextWeight = 'regular' | 'bold';

interface TextProps {
    children: ReactNode;
    size: TextSize;
    weight?: TextWeight;
}

export const Text: FC<TextProps> = ({ children, size, weight = 'regular' }) => {
    const sizeClassName: Record<TextSize, string> = {
        sm: styles.textSm,
        md: styles.textMd,
        lg: styles.textLg,
    };

    const weightClassName: Record<TextWeight, string> = {
        regular: styles.textRegular,
        bold: styles.textBold,
    };

    const className = `${styles.text} ${sizeClassName[size]} ${weightClassName[weight]}`;

    return <span className={className}>{children}</span>;
};
