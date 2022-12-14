import { Coffee } from '../pages/Home/components/CoffeeMenu/components/CoffeeList';
import { createContext, FC, ReactNode, useReducer } from 'react';
import { cartReducer } from '../reducer/reducer';
import { addOrderAction, removeOrderAction } from '../reducer/actions';

export interface Order {
    id: string | null;
    coffee: Coffee;
    amount: number;
}

interface CartContextType {
    orders: Order[];
    addOrder: (order: Order) => void;
    removeOrder: (orderId: string) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { orders: [] });
    const { orders } = cartState;

    const addOrder = (order: Order): void => dispatch(addOrderAction(order));

    const removeOrder = (orderId: string): void => dispatch(removeOrderAction(orderId));

    return <CartContext.Provider value={{ orders, addOrder, removeOrder }}>{children}</CartContext.Provider>;
};
