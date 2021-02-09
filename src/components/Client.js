import React from 'react'

const Client = ({ client }) => {
    return (
        <div>
            <h3>
                {client.client_name}
            </h3>
            <h3>
                {client.client_surname}
            </h3>
            <h3>
                {client.client_number}
            </h3>
        </div>
    )
}

export default Client
