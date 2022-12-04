import { FC, ReactNode, useState } from 'react';
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

interface RadioProps {
    children: ReactNode;
    id?: string;
    name?: string;
    value: string;
}

export const Radio: FC<RadioProps> = ({ children, id, name, value }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const radioId = id ? id : uuidv4();
    const containerClassName = `${styles.radio} ${isFocused ? styles.radioFocused : ''}`;

    const handleFocus = (): void => setIsFocused(true);

    const handleBlur = (): void => setIsFocused(false);

    return (
        <div className={containerClassName}>
            <input type="radio" id={radioId} name={name} value={value} onFocus={handleFocus} onBlur={handleBlur} />

            <label htmlFor={radioId}>{children}</label>
        </div>
    );
};
