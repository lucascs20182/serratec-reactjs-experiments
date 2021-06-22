import React from "react";
import { Card } from "../styles/geral-styles";

const MeuCard2 = (props) => {

    return (
        <Card>
            <header>
                {props.header}
            </header>

            <main>
                {props.main}
            </main>

            <footer>
                {props.footer}
            </footer>

            {props.children}
        </Card>
    );
}

export default MeuCard2;