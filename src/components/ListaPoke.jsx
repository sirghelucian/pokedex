import { useEffect, useState } from "react";
import Input from "./input/input";
import "./ListaPoke.scss";
import PokeCard from "./PokeCard";
import { Audio } from "react-loader-spinner";
import TextField from "@mui/material/TextField";

function ListaPoke() {
    const [filtro, setFiltro] = useState("");
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //Questi sono i risultati effettivi
                console.log(data);
                setLista(data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error("ops", err);
            });
    };

    // All'avvio, chiamo API per lista
    useEffect(() => {
        fetchPoke();
    }, []);

    return (
        <div className="container-list">
            {/* <input value={filtro} onChange={function (ev) {
                setFiltro(ev.target.value.toUppercase());
            }} /> */}

            {loading ? ( //Inserisco qualcosa al caricamento della pagina
                <Audio color="#00BFFF" height={120} width={120} />
            ) : (
                <>
                    {/* <Input
                        value={filtro}
                        onChange={(nuovoValore) => {
                            setFiltro(nuovoValore);
                        }}
                    /> */}
                    <TextField
                        label="Cerca un Pokemon"
                        variant="standard"
                        fullWidth={true} //si può scrivere anche solo fullWidth senza ={true}
                        value={filtro}
                        margin="normal"
                        onChange={(ev) => {
                            setFiltro(ev.target.value);
                        }}
                    />

                    {lista.map((item) => (
                        <PokeCard
                            key={item.name}
                            url={item.url}
                            hidden={
                                item.name
                                    .toLowerCase()
                                    .indexOf(filtro.toLowerCase()) === -1
                            }
                        />
                    ))}
                </>
            )}
        </div>
    );
}
export default ListaPoke;
