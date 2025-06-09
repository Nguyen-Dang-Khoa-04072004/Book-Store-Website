import ProductLayout from "../layout/ProductLayout";
import ProductPage from "../pages/product/ProductPage";


export const routes = [
    {
        path:"/",
        component: ProductPage,
        layout: ProductLayout
    }
]