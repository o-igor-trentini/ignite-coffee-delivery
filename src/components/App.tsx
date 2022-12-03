import { FC } from 'react';
import '../styles/main.css';
import { Text } from './ui/Text';

export const App: FC = () => {
    return (
        <div>
            <Text size="lg" weight="regular">
                Hello world
            </Text>
        </div>
    );
};
