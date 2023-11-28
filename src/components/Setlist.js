import React, { useState } from 'react'
import Song from "./Song"

function Setlist({ tracks, setlist, setSetlist, addSongToSetlist, deleteSong }) {

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
        {setlist.map((each) => {
            return  <Song 
            key={each.song} 
            song={each.song} 
            artist={each.artist} 
            image={each.image} 
            tracks={tracks} 
            setlist={setlist} 
            setSetlist={setSetlist} 
            deleteSong={deleteSong}
            addSongToSetlist={addSongToSetlist}
           />

        })}
        </div>
        </>
    );
}

export default Setlist;