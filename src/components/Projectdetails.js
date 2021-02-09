import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProjectInfo } from '../features/tasksSlice';
import Client from './Client';
import './Project.css';


const Projectdetails = () => {
    const project_details = useSelector(selectProjectInfo);
    const [projTitle, setProjTitle] = useState("");
    const [projClient, setProjClient] = useState(null);

    useEffect(() => {
        setProjTitle(project_details.title);
        setProjClient(project_details.client);

    }, [project_details]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {projTitle ?
                        <h1>{projTitle}</h1>
                        : <h1>NO title mentioned </h1>}

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {projClient ?
                        <Client client={projClient}></Client>
                        : <h1>NO title mentioned </h1>}
                </div>
            </div>


        </div >
    )
}

export default Projectdetails
