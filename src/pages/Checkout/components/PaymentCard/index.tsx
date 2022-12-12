import { FC } from 'react';
import styles from './index.module.css';
import { Card } from '../../../../components/ui/Card';
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { Text } from '../../../../components/ui/Text';
import { Radio } from '../../../../components/ui/Radio';

interface PaymentCardProps {
    onSubmit: () => void;
}

export const PaymentCard: FC<PaymentCardProps> = ({ onSubmit }) => {
    return (
        <Card className="w-100">
            <div className={styles.paymentCard}>
                <div className={styles.paymentCardTitle}>
                    <CurrencyDollar />

                    <div className={styles.paymentCardDescription}>
                        <Text size="md" weight="regular">
                            Pagamento
                        </Text>

                        <Text size="sm" weight="regular">
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </Text>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="w-100">
                    <div className={styles.paymentCardForm}>
                        <Radio.Group
                            values={[
                                {
                                    label: 'Cartão de crédito',
                                    value: 'credit',

                                    icon: <CreditCard />,
                                },
                                {
                                    label: 'Cartão de débito',
                                    value: 'debit',

                                    icon: <Money name="method" />,
                                },
                                {
                                    label: 'Dinheiro',
                                    value: 'money',

                                    icon: <Bank />,
                                },
                            ]}
                            block
                            required
                            name="method"
                        />
                    </div>
                </form>
            </div>
        </Card>
    );
};
