import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Tienda = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchGames(); // Función para obtener los juegos
    }, []);

    if (!store.games || store.games.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1 className="text-center text-light">TIENDA</h1>
            <div className="row">
                {store.games.map((game, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src={game.background_image} className="card-img-top" alt={game.name} />
                            <div className="card-body">
                                <h5 className="card-title">{game.name}</h5>
                                <p className="card-text">Rating: {game.rating}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={'/game-details/' + game.id} className="btn btn-outline-secondary">Details</Link>
                                    <button className="btn btn-outline-primary" onClick={() => actions.addToCart(game)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};