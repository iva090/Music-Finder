import React, { useState, useEffect } from 'react';

function WebApi({ query, song }) {
    const [accessToken, setAccessToken] = useState("");
    const CLIENT_ID = '19a666b79d0b4658aba1ac7cce51da8a';
    const CLIENT_SECRET = '72c641a94d694554a444c83144f6e598';

    useEffect(() => {
        const authParameters = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        };

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token));
    }, []);

    useEffect(() => {
        if (query && accessToken) {
            search();
        }
    }, [query, accessToken]);

    async function search() {
        const artistParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, 
            artistParameters
        );
        const data = await response.json();
        if (data.tracks) {
            song(data.tracks.items);
        }
    }

    return null;
}

export default WebApi;