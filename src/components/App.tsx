import { FC } from 'react';
import '../styles/main.css';
import { Input } from './ui/Input';
import { Text } from './ui/Text';
import { Title } from './ui/Title';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export const App: FC = () => {
    return (
        <div>
            <Text size="lg" weight="regular">
                Text
            </Text>

            <Title size="xl">Title</Title>

            <Input placeholder="Digite aqui..." />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 8,
                }}
            >
                <Button variant="primary">Botão</Button>
                <Button variant="delete">Botão</Button>
                <Button variant="shop-cart-primary">Botão</Button>
                <Button variant="shop-cart-secondary">Botão</Button>

                <Badge content="3">
                    <Button variant="shop-cart-primary">Botão com Badge</Button>
                </Badge>
            </div>
        </div>
    );
};
