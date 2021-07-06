import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"
import styled from "styled-components";

const ListStyles = styled.div`
li {
  margin: 0.8em 0 0.8em 3em;
  list-style: square;
}
`;

function Liste() {

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


  return (
    <ListStyles>
      <ul>
      {data.map((item, key) => (
        <li key={key}><Link to={"./description?id="+item.id}>{item.nom}</Link></li>
      ))}
      </ul>
    </ListStyles>

  );
}

export default Liste;
