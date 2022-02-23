import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

const ListAvisPassage = () => {
    const [avis, setAvis] = useState([])
    const navigate= useNavigate()
    const getAvis = async () => {
        const data = await fetch("http://localhost:1337/api/clean3000-avis-passages")
            .then(res => res.json())

        setAvis(data.data)
    }
    
    const detailClick=(avis)=>{
        navigate(`/avis/${avis.attributes.avis}`)
    }

    const listAvis=avis.map((avis) =>{
        return(
            <tr onClick={() =>{detailClick(avis)}}>
                <td>{avis.attributes.avis}</td>
                <td>{avis.attributes.worker}</td>
                <td>{avis.attributes.client}</td>
            </tr>
        )
    })
    useEffect(() => {
        getAvis()
    },[])
    return (
        <div>
            <Header />
            <table className="listAvisTableau">
                <thead>
                    <tr>
                        <th>Numero avis</th>
                        <th>Nom technicien</th>
                        <th>Nom client</th>
                    </tr>
                </thead>
                <tbody>
                    {listAvis}
                    {console.log(avis)}
                </tbody>

            </table>
        </div>
    )
}

export default ListAvisPassage