import { ChangeEvent, FC, useState } from 'react';
import styles from './index.module.css';
import { Text } from '../Text';
import { cepMask, onlyNumbersMask } from '../../../utils/string';

interface InputProps {
    id?: string;
    placeholder?: string;
    optional?: boolean;
    block?: boolean;
    maxLenght?: number;
    type?: 'text' | 'cep' | 'number';
    required?: boolean;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Input: FC<InputProps> = ({
    id,
    placeholder,
    optional = false,
    block = false,
    maxLenght,
    type = 'text',
    required = false,
    onChange,
    className,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerClassName = `${styles.inputContainer} ${isFocused ? styles.inputContainerFocused : ''} ${
        block ? 'w-100' : ''
    } ${className ?? ''}`;

    const handleFocus = (): void => setIsFocused(true);

    const handleBlur = (): void => setIsFocused(false);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        if (onChange) onChange(evt);

        /*eslint-disable*/
        switch (type) {
            case 'cep':
                evt.currentTarget.value = cepMask(evt.currentTarget.value);

            case 'number':
                evt.currentTarget.value = onlyNumbersMask(evt.currentTarget.value);
        }
        /*eslint-enable*/
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
                autoComplete="off"
                required={required}
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
