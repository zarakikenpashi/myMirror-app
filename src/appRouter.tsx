import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Bible from "./pages/Bible";
import Plan from "./pages/Plan";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/bible',
        element: <Bible/>
    },
    {
        path: '/plan',
        element: <Plan/>
    }
]);

export default router;