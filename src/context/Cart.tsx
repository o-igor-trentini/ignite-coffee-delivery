import { Coffee } from '../pages/Home/components/CoffeeMenu/components/CoffeeList';
import { createContext, FC, ReactNode, useEffect, useReducer } from 'react';
import { cartReducer, CartState } from '../reducer/reducer';
import { addOrderAction, removeOrderAction, updateOrderAction } from '../reducer/actions';

export interface Order {
    id: string | null;
    coffee: Coffee;
    amount: number;
}

interface CartContextType {
    orders: Order[];
    addOrder: (order: Order) => void;
    removeOrder: (orderId: string) => void;
    updateOrder: (order: Order) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { orders: [] }, () => {
        const storedStateAsJson = localStorage.getItem('@ignite-coffee-delivery:cart-state');

        let storedCartState: CartState = { orders: [] };

        if (storedStateAsJson) storedCartState = JSON.parse(storedStateAsJson);

        return storedCartState;
    });

    const { orders } = cartState;

    const addOrder = (order: Order): void => dispatch(addOrderAction(order));

    const removeOrder = (orderId: string): void => dispatch(removeOrderAction(orderId));

    const updateOrder = (order: Order): void => dispatch(updateOrderAction(order));

    useEffect(() => {
        const stateJson = JSON.stringify(cartState);

        localStorage.setItem('@ignite-coffee-delivery:cart-state', stateJson);
    }, [cartState]);

    return (
        <CartContext.Provider value={{ orders, addOrder, removeOrder, updateOrder }}>{children}</CartContext.Provider>
    );
};
