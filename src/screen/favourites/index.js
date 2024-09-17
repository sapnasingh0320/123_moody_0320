/*import React from "react";

export default function Favourites() {
  return <div className="screen-container">Favourites</div>
  
}

import React from "react";

export default function Favourites({ favoriteSongs }) {
  return (
    <div className="screen-container">
      <h1>Favourites</h1>
      <div className="favorite-songs">
        {favoriteSongs.map((song, index) => (
          <div key={index} className="favorite-song">
            <p>{song.name}</p>
            {/* Display other details of the song }
          </div>
        ))}
      </div>
    </div>
  );
}
*/
import React from "react";
import "./favourites.css"; // Assuming you have a CSS file for styling

export default function Favourites({ favoriteSongs }) {
  return (
    <div className="screen-container">
      <div className="library-body">
        {favoriteSongs.map((playlist) => (
          <div className="playlist-card" key={playlist.id}>
            <img 
              src={playlist.images[0].url} 
              className="playlist-image" 
              alt="Playlist-Art" 
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              {/* Add any additional functionality or icons here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}