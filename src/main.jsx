import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail";
import { ErrorPage } from "./components/ErrorPage/ErrorPage"

import {
    createBrowserRouter,
    RouterProvider    
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/detalle/:name/:id",
        element: <PokemonDetail />,
        errorElement: <ErrorPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
