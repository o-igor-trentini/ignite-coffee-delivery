import { FC, useState } from 'react';
import styles from './index.module.css';
import { Text } from '../Text';

interface InputProps {
    placeholder?: string;
    optional?: boolean;
    cover?: boolean;
    maxLenght?: number;
}

export const Input: FC<InputProps> = ({ placeholder, optional = false, cover = false, maxLenght }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerClassName = `${styles.inputContainer} ${isFocused ? styles.inputContainerFocused : ''} ${
        cover ? 'w-100' : ''
    }`;

    const handleFocus = (): void => setIsFocused(true);

    const handleBlur = (): void => setIsFocused(false);

    return (
        <div className={containerClassName}>
            <input
                type="text"
                placeholder={placeholder}
                maxLength={maxLenght}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.inputComponent}
            />

            {optional && (
                <Text size="sm" className={styles.inputAddonAfter} italic>
                    Opcional
                </Text>
            )}
        </div>
    );
};
