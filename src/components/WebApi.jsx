import React, { useState, useEffect } from 'react';

function WebApi(props) {
    const [accessToken, setAccessToken] = useState("");
    const CLIENT_ID = '19a666b79d0b4658aba1ac7cce51da8a'
    const CLIENT_SECRET = '72c641a94d694554a444c83144f6e598'
    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    async function search() {

    }

    return (
        <div>
            
        </div>
    );
}

export default WebApi;