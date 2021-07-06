import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from "react"

function Description(){

    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData  = async () => {
          const result = await axios(
          "https://www.montpellier-meilleur-ville.site/api/api/api.php", 
          )
          setData(result.data);
      }
      fetchData()
    }, [])
  

    function getId(param) {
        var vars = {};
        window.location.href.replace( window.location.hash, '' ).replace( 
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
    
        if ( param ) {
            return vars[param] ? vars[param] : null;	
        }
        return vars;
    }

    return (    
        <Fragment>
            {data.filter(lol => lol.id === getId('id')).map((item, key) => (
                <div key={key}>
                    <h1>{item.nom}</h1>
                    <h2>{item.description}</h2>
                    <p>Taux de remise : {item.remise} </p>
                    <p>Prix achat brut : {item.achatBrut} </p>
                    <p>Prix achat net : {item.achatBrut *(1-item.remise)}</p>
                    <p>Coefficient multiplicateur : {item.coeffMulti} </p>  
                    <p>Prix de vente net : {item.achatBrut *(1-item.remise) * item.coeffMulti} </p>
 
                </div>                 
            ))}
        </Fragment> 
    )
}

export default Description