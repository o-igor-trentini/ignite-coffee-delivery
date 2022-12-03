import { FC, useState } from 'react';
import styles from './index.module.css';
import { Text } from '../Text';

interface InputProps {
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ placeholder }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerClassName = `${styles.inputContainer} ${isFocused ? styles.inputContainerFocused : ''}`;

    const handleFocus = (): void => setIsFocused(true);

    const handleBlur = (): void => setIsFocused(false);

    return (
        <div className={containerClassName}>
            <input
                type="text"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.inputComponent}
            />

            <Text size="sm" className={styles.inputAddonAfter} italic>
                Opcional
            </Text>
        </div>
    );
};
