import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from "react"

function Liste() {

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


  return (
    <Fragment>
      {data.map((item, key) => (
        <p key={key}><Link to={"./description?id="+item.id}>{item.nom}</Link></p>
      ))}
    </Fragment>

  );
}

export default Liste;
