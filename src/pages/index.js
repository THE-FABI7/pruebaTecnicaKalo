import React from "react";
import Products from "./Products";
import style from "../pages/styles/index.css";
import Login from "./Login";
import { useState } from "react";
import Link from "next/link";
import Navbar from "./NavBar";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <main>
        <main className="main-content">
          <h1 className="main-title">Bienvenido a nuestra tienda virtual</h1>
          <p className="main-description">
            Descubre una amplia selección de productos de entretenimiento y
            gaming. Nuestros Productos los encuentras en la opcion{" "}
            <a href="/Products" className="hero-cta">
              Ver Productos
            </a>
            .
          </p>
          <div className="gif-container">
            <img
              className="gif"
              src="https://i.gifer.com/B9XW.gif"
              alt="GIF animado"
            />
          </div>
        </main>
      </main>
    </div>
  );
};

export default Home;
