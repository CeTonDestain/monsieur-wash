import { useEffect } from 'react'
import React, { useState } from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DetailAvis = () => {
    // const [avis, setAvis]=useState([])
    const [avisData, setAvisData] = useState({
        avis: "",
        client: "",
        worker: "",
        observation: ""
    })
    const { avis } = useParams()

    const detailedAvis = async () => {
        const data = await fetch("http://localhost:1337/api/clean3000-avis-passages")
            .then(res => res.json())
        console.log(data.data)

        for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].attributes.avis === avis) {
                setAvisData(
                    {
                        avis: data.data[i].attributes.avis,
                        client: data.data[i].attributes.client,
                        worker: data.data[i].attributes.worker,
                        observation: data.data[i].attributes.observation
                    }
                )
            }
        }
    }

    useEffect(() => {
        detailedAvis()
    }, [])

    return (
        <div>
            <Header />

            <div className="mainDetailAvis">
            <div className="return">
                <Link to="/avis">
                    <p>
                        retour
                    </p>
                </Link>
            </div>

                <h2>Recapitulatif Avis de passage</h2>
                <div className="containerRecap">
                    <div>
                        <span>Numero avis de passage :</span>
                        {avisData.avis}
                    </div>
                    <div>
                        <span>nom client :</span>
                        {avisData.client}
                    </div>
                    <div>
                        <span>observation</span>
                        <div className="detail">
                            {avisData.observation}
                        </div>
                    </div>
                    <div>
                        <span>Technicien</span>
                        <div className="detail">
                            {avisData.worker}
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default DetailAvis