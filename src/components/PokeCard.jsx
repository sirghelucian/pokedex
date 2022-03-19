import { useEffect, useState } from "react";
import Badge from "./badge/badge";
import "./PokeCard.scss";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

//Installa React developer tools

//Se ho il mouse sopra alla Pokecard voglio vedere l'immagine front_shiny altrimenti voglio vedere l'immagine front-default

function PokeCard({ url, hidden }) {
    const [data, setData] = useState();
    const [loading, setloading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [mouseOver, setMouseOver] = useState(true);
    const navigate = useNavigate();
    const fetchPokeDetails = () => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((remoteData) => {
                // Questi sono i risultati effettivi
                setData(remoteData);
                setHasError(false);
                setloading(false);
            })
            .catch((err) => {
                setHasError(true);
                setTimeout(() => {
                    navigate("/");
                }, 5000);
                console.error("ops", err);
            });
    };
    useEffect(() => {
        fetchPokeDetails();
    }, [url]);

    if (hasError) {
        return <h2>Errore</h2>;
    }

    if (hidden) {
        return null;
    }

    if (loading) {
        return (
            <div className="item-list">
                <Audio color="#ff00aa" height={40} width={40} />
            </div>
        );
    }

    return (
        <div
            className="item-list"
            onMouseOver={() => {
                setMouseOver(true);
            }}
            onMouseOut={() => {
                setMouseOver(false);
            }}
            onClick={() => {
                //al click sul pokemon reindirizzerà sulla pagina del pokemon dando il numero della posizione in cui si trova nella lista
                navigate("/pokemon/" + data.id);
            }}
        >
            <div>
                <h1 className="title">
                    {data.name} {mouseOver ? "*" : ""}
                </h1>
            </div>
            <div className="properties">
                <img
                    src={
                        mouseOver
                            ? data.sprites.front_default
                            : data.sprites.back_default
                    }
                    alt={data.name}
                ></img>
                <div className="type">
                    {data.types.map((item) => {
                        return (
                            <Badge key={item.type.name}>{item.type.name}</Badge>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default PokeCard;
