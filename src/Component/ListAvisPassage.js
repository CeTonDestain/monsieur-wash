import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { Button } from 'antd/lib/radio';

const ListAvisPassage = () => {
    const [avis, setAvis] = useState([])
    
    const navigate = useNavigate()

    const getAvis = async () => {
        const data = await fetch("http://localhost:1337/api/clean3000-avis-passages")
            .then(res => res.json())

        setAvis(data.data)
    }

    const detailClick = (avis) => {
        navigate(`/avis/${avis.attributes.avis}`)
    }

    const deleteAvis=(id)=>{
        console.log(id)
        fetch(`http://localhost:1337/api/clean3000-avis-passages/${id}`, { method: 'DELETE' });
        window.location.reload();


    }

    const listAvis = avis.map((avis) => {
        return (
            <tr>
                <td  onClick={() => { detailClick(avis) }}>{avis.attributes.avis}</td>
                <td  onClick={() => { detailClick(avis) }}>{avis.attributes.worker}</td>
                <td  onClick={() => { detailClick(avis) }}>{avis.attributes.client}</td>
                <td><Button type="primary" danger onClick={()=>{deleteAvis(avis.id)}}>Supprimer</Button></td>
            </tr>
                 
        )
    })
    useEffect(() => {
        getAvis()
    }, [])
    return (
        <div>
            <Header />
            <table className="listAvisTableau">
                <thead>
                    <tr>
                        <th>Numero avis</th>
                        <th>Nom technicien</th>
                        <th>Nom client</th>
                        <th>Delete</th>
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