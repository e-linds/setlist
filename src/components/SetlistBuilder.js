import React, { useState, useEffect } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {
    const [tracks, setTracks] = useState([])
    const [setlist, setSetlist] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3110/tracks`)
        .then(r => r.json())
        .then(data => {
            setTracks(data)
        })
    }, [])

    function deleteSong (songId) {
        fetch(`http://localhost:3110/tracks/${songId}`, {
            method: "DELETE"
        })

        const newArray = tracks.filter((each) => {
            return each.id !== songId
        })

        setTracks(newArray)

    }
    
        function addSongToSetlist(variableSong, flip) {

        // filter through tracks to pull out individual song by name
        const newSong = (tracks.filter((each) => {
            return variableSong === each.song
        }))[0]

        // filter out the song which is passed in - to remove from setlist
        const newArray = setlist.filter((each) => {
            return each !== newSong
        })

        if (flip === false) {
            setSetlist([...setlist, newSong])

        } 
        else if (flip === true) {
            setSetlist(newArray)
        }
    }

    return(
        <div className="builder">
            <SongList tracks={tracks} setTracks={setTracks} setlist={setlist} setSetlist={setSetlist} addSongToSetlist={addSongToSetlist} deleteSong={deleteSong}/>
            <div className="vl"></div>
            <Setlist tracks={tracks} setlist={setlist} setSetlist={setSetlist} addSongToSetlist={addSongToSetlist} deleteSong={deleteSong}/>
        </div>
    );
}

export default SetlistBuilder;