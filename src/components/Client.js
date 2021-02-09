import React from 'react'

const Client = ({ client }) => {
    return (
        <div>
            <h4>
                Nom: {client.client_name}
            </h4>
            <h4>
                Prénom: {client.client_surname}
            </h4>
            <h4>
                Tél: {client.client_number}
            </h4>
        </div>
    )
}

export default Client
