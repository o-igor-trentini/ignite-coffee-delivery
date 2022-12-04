import { FC, useState } from 'react';
import { Minus, Plus } from 'phosphor-react';
import styles from './index.module.css';
import { Text } from '../Text';

interface CounterProps {
    minValue?: number;
    onIncrease?: (value: number) => void;
    onDecrease?: (value: number) => void;
}

export const Counter: FC<CounterProps> = ({ minValue = 0, onIncrease, onDecrease }) => {
    const [value, setValue] = useState<number>(minValue);

    const handleIncrease = (): void =>
        setValue((state) => {
            const newValue = state + 1;

            if (onIncrease) onIncrease(newValue);

            return newValue;
        });

    const handleDecrease = (): void =>
        setValue((state) => {
            const newValue = state === minValue ? state : state - 1;

            if (onDecrease) onDecrease(newValue);

            return newValue;
        });

    return (
        <div className={styles.counter}>
            <button type="button" onClick={handleDecrease}>
                <Minus weight="bold" />
            </button>

            <Text size="md" weight="regular">
                {value}
            </Text>

            <button type="button" onClick={handleIncrease}>
                <Plus weight="bold" />
            </button>
        </div>
    );
};
