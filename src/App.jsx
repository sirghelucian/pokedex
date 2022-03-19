import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Pokemon from "./screen/Pokemon";
import NotFound from "./screen/NotFound";
import ButtonAppBar from "./components/AppBar";

function App() {
    return (
        //Applicazione che permette di cercare pokemon, cliccando su di essa per vedere la scheda del pokemon cliccato
        //Nella home ti permette di cercare un pokemon random e ogni volta che passi sopra col mouse sul pokemon esso si gira
        <div className="App">
            <BrowserRouter>
                <ButtonAppBar />
                <Routes>
                    {/*Routes funziona come se fosse uno switch*/}
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon/:id" element={<Pokemon />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
