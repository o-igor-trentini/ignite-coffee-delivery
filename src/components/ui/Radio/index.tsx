import { FC, ReactNode, useState } from 'react';
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

interface RadioBaseProps {
    label: ReactNode;
    id?: string;
    name?: string;
    value: string;
    block?: boolean;
    required?: boolean;
    icon?: ReactNode;
}

const Default: FC<RadioBaseProps> = ({ label, id, name, value, block = false, required = false, icon }) => {
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

            <label htmlFor={radioId}>
                {icon}
                {label}
            </label>
        </div>
    );
};

interface RadioGroupProps extends Omit<RadioBaseProps, 'label' | 'value' | 'icon'> {
    values: { label: string; value: string; icon?: ReactNode }[];
}

const Group: FC<RadioGroupProps> = ({ values, name, block, required, id }) => {
    return (
        <>
            {values.map((item) => (
                <Default
                    key={item.value}
                    id={id}
                    name={name}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                    block={block}
                    required={required}
                />
            ))}
        </>
    );
};

export const Radio = {
    Default,
    Group,
};
