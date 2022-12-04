import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import { Text } from '../Text';

interface BadgeProps {
    children: ReactNode;
    content: string | number;
}

export const Badge: FC<BadgeProps> = ({ children, content }) => {
    return (
        <div className={styles.badgeContainer}>
            <span className={styles.badge}>
                <Text size="sm" weight="bold">
                    {content}
                </Text>
            </span>

            {children}
        </div>
    );
};
