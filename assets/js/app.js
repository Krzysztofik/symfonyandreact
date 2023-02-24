import React from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeList from "./RecipeList";
import BlogList from "./BlogList";
import ProductList from "./ProductList";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/blog" element={<BlogList />} />
        </Routes>
    </BrowserRouter>
);