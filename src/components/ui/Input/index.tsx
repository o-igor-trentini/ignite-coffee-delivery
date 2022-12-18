import { ChangeEvent, FC, useState } from 'react';
import styles from './index.module.css';
import { Text } from '../Text';

interface InputProps {
    id?: string;
    placeholder?: string;
    optional?: boolean;
    block?: boolean;
    maxLenght?: number;
    type?: 'text' | 'number';
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
    id,
    placeholder,
    optional = false,
    block = false,
    maxLenght,
    type = 'text',
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerClassName = `${styles.inputContainer} ${isFocused ? styles.inputContainerFocused : ''} ${
        block ? 'w-100' : ''
    }`;

    const handleFocus = (): void => setIsFocused(true);

    const handleBlur = (): void => setIsFocused(false);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        if (onChange) onChange(evt);

        if (type === 'number') evt.currentTarget.value = evt.currentTarget.value.replace(/\D/g, '');
    };

    return (
        <div className={containerClassName}>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                maxLength={maxLenght}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
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
