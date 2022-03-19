//react snippet--> ES7+ React/Redux/React-Native snippets installa rfce e crea subito la funzione Home o quel che sia
import React from "react";
import ListaPoke from "../components/ListaPoke";
import { useNavigate } from "react-router-dom";

function Home() {
    return (
        <div>
            <ListaPoke />
        </div>
    );
}

export default Home;
