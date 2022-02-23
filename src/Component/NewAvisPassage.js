import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

const NewAvisPassage = () => {
    const [workers, setWorkers] = useState([])
    const [clients, setClients] = useState([])
    const [avisPassage, setAvisPassage] = useState({
        worker: "",
        date: "",
        client: "",
        observation: "",
        avis: ""
    })

    const navigate = useNavigate()

    const getWorkers = async () => {
        const data = await fetch("http://localhost:1337/api/clean3000-workers")
            .then(res => res.json())

        setWorkers(data.data)

    }

    const getClients = async () => {
        const data = await fetch("http://localhost:1337/api/clean3000-clients")
            .then(res => res.json())

        setClients(data.data)

    }

    const handleChange = (key, value) => {
        setAvisPassage({
            ...avisPassage,
            [key]: value,
            avis: `avis-${Date.now()}`
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:1337/api/clean3000-avis-passages", {
            method: "POST",
            body: JSON.stringify({
                data: avisPassage
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        navigate("/")
    }


    const listworker = workers.map((worker) => {
        return (
            <option value={worker.attributes.id}>{worker.attributes.nom}</option>
        )
    })
    const listclient = clients.map((client) => {
        return (
            <option value={client.attributes.id}>{client.attributes.nom}</option>
        )
    })

    useEffect(() => {
        getWorkers()
        getClients()
    }, [])
    return (
        <div className="mainNewAvis">
            <Header />
            <div className="main">
                <div className="mainImageNew">
                {console.log(workers)}
                </div>
                <div className="mainForm">
                    <div><h2>Avis de passage</h2></div>
                    <form className='newPassageForm' onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="selectListWorker">Technicien</label>
                            <select name="worker" id="selectListWorker" value={avisPassage.worker} onChange={(e) => handleChange("worker", e.target.value)} required>
                                <option value="">----</option>
                                {listworker}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" name="" id="date" onChange={(e) => handleChange("date", e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="selectListClient">Client</label>
                            <select name="client" id="selectListClient" onChange={(e) => handleChange("client", e.target.value)} required>
                                <option value="">----</option>
                                {listclient}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="observation">Observation</label>
                            <textarea name="observation" id="observation" cols="30" rows="5" value={avisPassage.observation} onChange={(e) => handleChange("observation", e.target.value)} required />
                        </div>
                        <input type="submit" value="valider" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewAvisPassage