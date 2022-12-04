import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Default } from '../layout/Default';
import { Home } from '../../pages/Home';
import { Checkout } from '../../pages/Checkout';
import { Success } from '../../pages/Success';

export const Router: FC = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <Routes>
            <Route path={baseUrl} element={<Default />}>
                <Route index element={<Home />} />

                <Route path="checkout" element={<Checkout />} />

                <Route path="success" element={<Success />} />
            </Route>

            <Route path="*" element={<Navigate to={baseUrl} />} />
        </Routes>
    );
};
