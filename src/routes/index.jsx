import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Libres from "../components/Libres";
import descriptionLibres from "../utils/descriptionLibres"
import iconsLibres from "../utils/iconslibres"
import iconsPrimitivos from "../utils/iconPrimitivos";
import descriptionPrimitivos from "../utils/descriptionPrimitivos";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/primitivos',
        element: <Libres icon={iconsPrimitivos} icondescription={descriptionPrimitivos}/>
    },
    {
        path: '/libres',
        element: <Libres icon={iconsLibres} icondescription={descriptionLibres} />
    },
])

export default router