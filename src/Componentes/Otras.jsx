// API key de Pixabay
const apiKey = '38337970-b8973841940bf154d99c6fe77';

import React, { useEffect, useState } from "react";

const ApiPixabay = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = "38337970-b8973841940bf154d99c6fe77";
      const query = "paisajes ciudades";
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`
        );
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageSelect = (e) => {
    const imageUrl = e.target.value;
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <h2>Imágenes de Paisajes y Ciudades</h2>
      <div>
        {/* Lista de imágenes de Paisajes y Ciudades */}
        <select value={selectedImage} onChange={handleImageSelect}>
          <option value="">Selecciona una imagen</option>
          {images.map((image) => (
            <option key={image.id} value={image.webformatURL}>
              {image.tags}
            </option>
          ))}
        </select>
        {/* Mostrar la imagen seleccionada */}
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Paisaje o Ciudad" />
          </div>
        )}
      </div>
    </div>
  );
};

const otras = () =>{
    return (
        <section id="otras" className="otrasSection">
            <ApiPixabay />
        </section>
    );
};

export default otras;