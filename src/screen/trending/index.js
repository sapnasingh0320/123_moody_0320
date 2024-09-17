/*import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import "./trending.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [trendingPlaylist, setTrendingPlaylist] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      // Find the playlist named "trending"
      const trending = response.data.items.find(
        (playlist) => playlist.name === "trending"
      );
      if (trending) {
        // Fetch the tracks of the trending playlist
        APIKit.get(`playlists/${trending.id}/tracks`).then(function (response) {
          setTrendingPlaylist(response.data.items);
          console.log(response.data.items);
        });
      } else {
        console.log("Trending playlist not found");
      }
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="trending-body">
        {trendingPlaylist?.map((song) => (
          <div
            className="playlist-card"
            key={song.track.id}
            onClick= {playPlaylist}
          >
            <img
              src={song.track.album.images[0].url}
              className="playlist-image"
              alt="Song-Art"
            />
            <p className="playlist-title">{song.track.name}</p>
            <p className="playlist-subtitle">{song.track.album.name}</p>
            <div className="playlist-fade">
              <IconContext.Provider
                value={{ size: "50px", color: "#E99D72" }}
              >
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
import React, { useState } from 'react';
import APIKit from '../../spotify'; // Your Spotify API utility functions
import './search.css'; // CSS styles for search component

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await APIKit.get(`search?q=${searchQuery}&type=track`);
      setSearchResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error searching for tracks:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a song"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="search-results">
        {searchResults.map((track) => (
          <div key={track.id} className="search-result">
            <img src={track.album.images[0].url} alt="Album Art" />
            <div className="track-info">
              <h3>{track.name}</h3>
              <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
              <p>Album: {track.album.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}