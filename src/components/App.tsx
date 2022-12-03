import { FC } from 'react';
import '../styles/main.css';
import { Text } from './ui/Text';
import { Title } from './ui/Title';

export const App: FC = () => {
    return (
        <div>
            <Text size="lg" weight="regular">
                Text
            </Text>

            <Title size="xl">Title</Title>
        </div>
    );
};
