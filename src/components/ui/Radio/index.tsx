import { FC, ReactNode, useState } from 'react';
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

interface RadioProps {
    children: ReactNode;
    id?: string;
    name?: string;
    value: string;
    block?: boolean;
    required?: boolean;
}

export const Radio: FC<RadioProps> = ({ children, id, name, value, block = false, required = false }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const radioId = id ? id : uuidv4();
    const containerClassName = `${styles.radio} ${isFocused ? styles.radioFocused : ''} ${block ? 'w-100' : ''}`;

    const handleFocus = (): void => setIsFocused(true);

    const handleBlur = (): void => setIsFocused(false);

    return (
        <div className={containerClassName}>
            <input
                type="radio"
                id={radioId}
                name={name}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required={required}
            />

            <label htmlFor={radioId}>{children}</label>
        </div>
    );
};
