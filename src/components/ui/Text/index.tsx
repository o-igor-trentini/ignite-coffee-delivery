import { FC, ReactNode } from 'react';
import styles from './index.module.css';

type TextSize = 'sm' | 'md' | 'lg';
type TextWeight = 'regular' | 'bold';

interface TextProps {
    children: ReactNode;
    size: TextSize;
    weight?: TextWeight;
    italic?: boolean;
    className?: string;
}

export const Text: FC<TextProps> = ({ children, size, weight = 'regular', italic = false, className }) => {
    const sizeClassName: Record<TextSize, string> = {
        sm: styles.textSm,
        md: styles.textMd,
        lg: styles.textLg,
    };

    const weightClassName: Record<TextWeight, string> = {
        regular: styles.textRegular,
        bold: styles.textBold,
    };

    const cName = `${styles.text} ${sizeClassName[size]} ${weightClassName[weight]} ${
        italic ? styles.textItalic : ''
    } ${className ?? ''}`;

    return <span className={cName}>{children}</span>;
};
