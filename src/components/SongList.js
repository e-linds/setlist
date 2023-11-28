import React from 'react'
import Song from "./Song"

function SongList({ tracks, setTracks, addSongToSetlist, deleteSong }) {

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {tracks.map((each) => {
                return <Song 
                key={each.id} 
                id={each.id}
                song={each.song} 
                artist={each.artist} 
                image={each.image} 
                tracks={tracks}  
                deleteSong={deleteSong}
                addSongToSetlist={addSongToSetlist} />
            })}
        </div>
        </>
    );
}

export default SongList;