import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const DescriptionStyles = styled.div`
  padding: 2em 4em;

  .label {
    font-size: 0%.8em;
    font-weight: bold;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

function Description() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.montpellier-meilleur-ville.site/api/api/api.php"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  function getId(param) {
    var vars = {};
    window.location.href.replace(window.location.hash, "").replace(
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function (m, key, value) {
        // callback
        vars[key] = value !== undefined ? value : "";
      }
    );

    if (param) {
      return vars[param] ? vars[param] : null;
    }
    return vars;
  }

  return (
    <DescriptionStyles>
      {data
        .filter((lol) => lol.id === getId("id"))
        .map((item, key) => (
          <div className="container" key={key}>
            <h1>{item.nom}</h1>
            <div className="details">
              <p className="label">Description :</p>
              <p>{item.description}</p>
              <p className="label">Taux de remise : </p>
              <p>{item.remise} </p>
              <p className="label">Prix achat brut : </p>
              <p>{item.achatBrut} </p>
              <p className="label">Prix achat net : </p>
              <p>{item.achatBrut * (1 - item.remise)}</p>
              <p className="label">Coefficient multiplicateur : </p>
              <p>{item.coeffMulti} </p>
              <p className="label">Prix de vente net :</p>
              <p> {item.achatBrut * (1 - item.remise) * item.coeffMulti} </p>
            </div>
          </div>
        ))}
    </DescriptionStyles>
  );
}

export default Description;
