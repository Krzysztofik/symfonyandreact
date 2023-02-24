import React from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeList from "./RecipeList";
import BlogList from "./BlogList";
import ProductList from "./ProductList";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/recipe" element={<RecipeList />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
    );
