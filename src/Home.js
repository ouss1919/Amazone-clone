import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className = 'home'> 
            <div className="home__container">
                <img className = "home__img"src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" alt=""/>
                <div className="home__row">
                    <Product
                    id = "2983479832"
                    description="Fire TV Stick 4K Ultra HD avec télécommande vocale Alexa nouvelle génération, Lecteur multimédia en streaming"
                    price={59.99}
                    rating={4}
                    imageUrl="https://m.media-amazon.com/images/I/31eZ0xzwDLL.jpg"
                    />
                    <Product 
                    id = "292346779"
                    description="Nouvel Echo Dot (4e génération), Enceinte connectée avec Alexa, Anthracite"
                    price={44.99}
                    rating={5}
                    imageUrl="https://m.media-amazon.com/images/I/51fsVTWWlPL.jpg"/>
                </div>
                <div className="home__row">
                    <Product
                    id = "24324325235"
                    description="Kindle Paperwhite - Résistant à l'eau, Écran haute résolution 6&#8220;, 8 Go - Avec publicités"
                    price={129.99}
                    rating={3}
                    imageUrl="https://m.media-amazon.com/images/I/41C75bX3qOL.jpg"/>
                    <Product
                    id = "29834432534"                 
                    description="Echo Dot (3ème génération), Enceinte connectée avec Alexa, Tissu anthracite"
                    price={119.99}
                    rating={5}
                    imageUrl="https://m.media-amazon.com/images/I/41hX+2Es+vL.jpg"/>
                    <Product
                    id = "29865865765"                  
                    description="Découvrez Fire TV Cube, Mains-libres avec Alexa, lecteur multimédia en streaming 4K Ultra HD"
                    price={39.99}
                    rating={4}
                    imageUrl="https://m.media-amazon.com/images/I/314zaBSgvvL.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
