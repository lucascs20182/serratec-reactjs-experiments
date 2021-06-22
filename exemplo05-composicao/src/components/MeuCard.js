import React from "react";
import { Card } from "../styles/geral-styles";

const MeuCard = (props) => {

    return (
        <Card>
            {props.children}
        </Card>
    );
}

export default MeuCard;