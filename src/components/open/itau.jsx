import React, { useEffect } from "react";
import { Request } from "../../services/request";

export default async function itau()
{
    const [dados, setDados] = useState([]);

    const capturaDados = await Request('https://api.itau/open-banking/products-services/v1/personal-financings');

    useEffect(()=>{
        setDados(capturaDados);
        console.debug(dados);
    }, [])

    return(
        <></>
    )
}