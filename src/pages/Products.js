import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import products from "./ProductsData";
import style from "./styles/Products.css";
import Navbar from "./NavBar";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const router = useRouter();

  /**
   * Esta función establece el estado de un modal para abrir.
   */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  /**
   * La función handleCloseModal establece el estado de isModalOpen en falso.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <><Navbar />
    <div className="product-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Gaming">Gaming</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input
          type="number"
          placeholder="Precio máximo"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)} />
      </div>
      <div className="product-list">
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((product) => categoryFilter ? product.categorie === categoryFilter : true
          )
          .filter((product) => priceFilter ? product.price <= parseInt(priceFilter) : true
          )
          .map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <img
                src={product.image[0].image1}
                alt={product.name}
                height={100}
                className="product-image" />
              <p>Precio: ${product.price}</p>
              <p>{product.description}</p>
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  handleOpenModal();
                } }
                className="product-details-button"
              >
                Ver detalles
              </button>
              {selectedProduct && (
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={handleCloseModal}
                  contentLabel="Detalles del producto"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2 className="modal-title">{selectedProduct.name}</h2>
                      <button
                        className="modal-close-button"
                        onClick={handleCloseModal}
                      >
                        <span className="close-icon">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="modal-image-container">
                        {selectedProduct.image.map((image, index) => (
                          <img
                            key={index}
                            src={Object.values(image)[0]}
                            alt={selectedProduct.name}
                            className="modal-image"
                            onClick={() => {
                              setCurrentImageIndex(index);
                              setIsImageModalOpen(true);
                            } } />
                        ))}
                        {isImageModalOpen && (
                          <div
                            className="modal-overlay"
                            onClick={() => setIsImageModalOpen(false)}
                          >
                            <img
                              src={Object.values(
                                selectedProduct.image[currentImageIndex]
                              )[0]}
                              alt={selectedProduct.name}
                              className="modal-enlarged-image" />
                          </div>
                        )}
                      </div>
                      <div className="modal-details">
                        <p className="modal-description">
                          Precio: ${selectedProduct.price}
                        </p>
                        <p className="modal-description">
                          {selectedProduct.description}
                        </p>
                        <div className="modal-card">
                          <h3>Características:</h3>
                          {selectedProduct.characteristics.map(
                            (characteristics, index) => (
                              <div key={index}>
                                <h4>{characteristics.name}</h4>
                                <p>
                                  Descripción: {characteristics.description}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                        <div className="modal-card">
                          <h3>Reseñas:</h3>
                          {selectedProduct.reviews.map((review, index) => (
                            <div key={index}>
                              <h4>{review.title}</h4>
                              <p>Rating: {review.rating}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          ))}
      </div>
    </div></>
  );
};

export default Products;
