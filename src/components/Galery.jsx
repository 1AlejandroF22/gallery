import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Galery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Función para cargar las imágenes desde la API
        const fetchImages = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                if (!response.ok) {
                    throw new Error("Error al cargar las imágenes");
                }
                const data = await response.json();
                setImages(data.results); // Actualiza el estado con las imágenes obtenidas de la API
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages(); // Llama a la función para cargar las imágenes cuando el componente se monta
    }, []);

    return (
			<div className="gallery">
				<div className="row">
					{images.map((image, index) => (
						<div key={index} className="col-sm-6 col-md-3 col-lg-3 mb-3">
							<div className="card">
								<img
									src={image.image}
									className="card-img-top"
									alt={image.name}
								/>
								<div className="card-body">
									<p className="card-text">{image.name}</p>
									<p className="card-text">{image.status}</p>
									<p className="card-text">{image.species}</p>
									<p className="card-text">{image.gender}</p>
									<p className="card-text">{image.gender.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default Galery;
