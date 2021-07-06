import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from "react"

function Description(){

    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData  = async () => {
          const result = await axios(
          "http://localhost/msprPharma/api/api.php", 
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
                    <p>Taux de remise : <input value={item.remise}></input> </p>
                    <p>Prix achat net : {item.achatNet} </p>
                    <p>Prix de vente net : {item.achatNet * item.coeffMulti} </p>
                    <p>Coefficient multiplicateur : {item.coeffMulti} </p>   
                </div>                 
            ))}
        </Fragment> 
    )
}

export default Description