import React from 'react';
import './Card1.css'; // Import your CSS file for styling

// Import sample images
import cultivator from './cultivator.png'
import harrow from './harrow.jpg'
import grasscutter from './grass cutter.jpg'
import threasher from './threasher.jpg'
import rotavator from './Rotavator.jpg'
import seeddrill from './seed drill.jpg'
import sprayer from "./sprayer.jpg";
import plough from "./Plough.jpg";
import handsprayer from "./hand sprayer.jpg"
// Add more images as needed

const Card1 = () => {
    // Sample data for cards (image, title, and description)
    const cardsData = [
        { image: harrow, title: "HARROW", description: "Easily cultivate and prepare your soil with our efficient harrows." },
        { image: rotavator, title: "ROTAVATOR", description: "Transform soil effortlessly with our high-performance rotavators." },
        { image: cultivator, title: "CULTIVATOR", description: "Efficiently prepare your soil for planting with our versatile cultivators." },
        { image: threasher, title: "THREASHER", description: "Maximize your harvest efficiency with our reliable threshers." },
        { image: grasscutter, title: "GRASS-CUTTER", description: "Keep your lawn pristine with our powerful grass cutters." },
        { image: seeddrill, title: "SEED-DRILL", description: "Plant seeds efficiently and accurately with our precision seed drill." },
        { image: sprayer, title: "SPRAYER", description: "Easily apply pesticides and fertilizers with our reliable sprayers." },
        { image: plough, title: "PLOUGH", description:"Turn soil with ease using our durable and efficient ploughs." },
        { image: handsprayer, title: "HAND-SPRAYER", description: "Effortlessly apply liquids with our convenient hand sprayers." },

        // Add more card data as needed
    ];

    return (
            <div className="cards__container ">
                <h3 style={{color:'white', marginTop:'5%'}}>Our Products</h3>
                <div className="cards__wrapper">
                    {cardsData.map((card, index) => (
                        <div className="cards__item" key={index}>
                            <img src={card.image} alt={card.title} className="card__image" />
                            <h3 className="card__title">{card.title}</h3>
                            <p className="card__description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Card1;
