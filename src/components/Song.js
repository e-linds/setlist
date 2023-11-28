import React, { useState } from 'react'

function Song({ tracks, id, song, artist, image, setlist, setSetlist, addSongToSetlist, deleteSong }) {
    const [added, setAdded] = useState(false)

    function handleSongClick() {
        setAdded(!added)

        addSongToSetlist(song, added)
        

    }

    return(
        <>
        <div className="song" onClick={handleSongClick}>
            <img src={image}/>
            <div className="song-info">
                <h3>{song}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
            <button id="delete-button" onClick={()=> deleteSong(id)}>X</button>
        </>
    );
}

export default Song;