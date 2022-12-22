import { Coffee } from '../pages/Home/components/CoffeeMenu/components/CoffeeList';
import { createContext, FC, ReactNode, useEffect, useReducer } from 'react';
import { cartReducer, CartState } from '../reducer/reducer';
import { addOrderAction, removeOrderAction, setDetailsAction, updateOrderAction } from '../reducer/actions';
import { AddressForm } from '../pages/Checkout/components/AddressFormCard';
import { PaymentMethod } from '../pages/Checkout/components/PaymentCard';

export interface Order {
    id: string | null;
    coffee: Coffee;
    amount: number;
}

export interface CartDetails {
    address: AddressForm | null;
    payment: string | null;
}

interface CartContextType {
    orders: Order[];
    details: CartDetails;
    addOrder: (order: Order) => void;
    removeOrder: (orderId: string) => void;
    updateOrder: (order: Order) => void;
    setDetails: (address: AddressForm, paymentMethod: PaymentMethod) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { orders: [] }, () => {
        const storedStateAsJson = localStorage.getItem('@ignite-coffee-delivery:cart-state');

        let storedCartState: CartState = {
            orders: [],
            details: {
                address: null,
                payment: null,
            },
        };

        if (storedStateAsJson) storedCartState = JSON.parse(storedStateAsJson);

        return storedCartState;
    });

    const { orders, details } = cartState;

    const addOrder = (order: Order): void => dispatch(addOrderAction(order));

    const removeOrder = (orderId: string): void => dispatch(removeOrderAction(orderId));

    const updateOrder = (order: Order): void => dispatch(updateOrderAction(order));

    const setAddress = (address: AddressForm, paymentMethod: PaymentMethod): void =>
        dispatch(setDetailsAction(address, paymentMethod));

    useEffect(() => {
        const stateJson = JSON.stringify(cartState);

        localStorage.setItem('@ignite-coffee-delivery:cart-state', stateJson);
    }, [cartState]);

    return (
        <CartContext.Provider value={{ orders, details, addOrder, removeOrder, updateOrder, setDetails: setAddress }}>
            {children}
        </CartContext.Provider>
    );
};
