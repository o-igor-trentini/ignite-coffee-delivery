import { FC, useEffect, useState } from 'react';
import { Minus, Plus } from 'phosphor-react';
import styles from './index.module.css';
import { Text } from '../Text';

type CounterSize = 'xs' | 'default';

interface CounterProps {
    value?: number;
    minValue?: number;
    size?: CounterSize;
    onIncrease?: (value: number) => void;
    onDecrease?: (value: number) => void;
    onChange?: (value: number) => void;
}

export const Counter: FC<CounterProps> = ({
    value,
    minValue = 0,
    size = 'default',
    onIncrease,
    onDecrease,
    onChange,
}) => {
    const [inputvalue, setInputvalue] = useState<number>(value ?? minValue);
    const sizeClassName: Record<CounterSize, string> = {
        xs: styles.counterXsSize,
        default: styles.counterDefaultSize,
    };

    const counterClassName = `${styles.counter} ${sizeClassName[size]}`;

    const handleIncrease = (): void =>
        setInputvalue((state) => {
            const newValue = state + 1;

            if (onIncrease) onIncrease(newValue);

            return newValue;
        });

    const handleDecrease = (): void =>
        setInputvalue((state) => {
            const newValue = state === minValue ? state : state - 1;

            if (onDecrease) onDecrease(newValue);

            return newValue;
        });

    useEffect(() => {
        if (!onChange) return;

        onChange(inputvalue);
    }, [inputvalue, onChange]);

    return (
        <div className={counterClassName}>
            <button type="button" onClick={handleDecrease}>
                <Minus weight="bold" />
            </button>

            <Text size="md" weight="regular">
                {inputvalue}
            </Text>

            <button type="button" onClick={handleIncrease}>
                <Plus weight="bold" />
            </button>
        </div>
    );
};
