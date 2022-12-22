import { FC, FormEvent, forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import styles from './index.module.css';
import { Card } from '../../../../components/ui/Card';
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { Text } from '../../../../components/ui/Text';
import { Radio } from '../../../../components/ui/Radio';

export type PaymentMethod = 'credit' | 'debit' | 'money';

interface PaymentForm {
    method: PaymentMethod;
}

export interface PaymentCardFormRef {
    getValues: () => PaymentForm | null;
}

const PaymentCard: ForwardRefRenderFunction<PaymentCardFormRef, unknown> = (_, ref) => {
    const getFormValues = (): PaymentForm | null => {
        const form = document.querySelector('#form-payment') as HTMLFormElement;

        if (!form.reportValidity()) return null;

        const values: PaymentForm = {
            method: form?.payment_method.value ?? '',
        };

        return values;
    };

    useImperativeHandle(ref, () => ({
        getValues: getFormValues,
    }));

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

                <form id="form-payment" className="w-100">
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
                            name="payment_method"
                        />
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default forwardRef(PaymentCard);
