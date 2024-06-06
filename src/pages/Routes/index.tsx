import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Product } from "../Product"
import { CartPage } from "../Cart"

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/product/:id' element={ <Product/> } />
                <Route path="/Cart" element={ <CartPage /> } />
            </Routes>
        </BrowserRouter>
    )
}