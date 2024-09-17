/*import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import "./player.css";
import AudioPlayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

export default function Player() {
 const location = useLocation();
  const [tracks, setTracks]=useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  },[location.state]);

  useEffect(() => {
  setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex,tracks]);
 /*useEffect(() => {
    if (tracks.length > 0 && tracks[currentIndex]) {
     setCurrentTrack(tracks[currentIndex].track);
    }
 }, [currentIndex, tracks]);
 */

 /* return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer 
        currentTrack={currentTrack} 
        total={tracks}
       // isPlaying={true} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
     <div className="right-player-body">
       <SongCard album={currentTrack?.album} />
       <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
     </div>
    </div>
  );
}/*
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import "./player.css";
import AudioPlayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const playlistId = params.get('playlist_id');

    if (playlistId) {
      apiClient
        .get(`playlists/${playlistId}/tracks`)
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.search]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer 
          currentTrack={currentTrack} 
          total={tracks}
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
*/
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import "./player.css";
import AudioPlayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state && location.state.id) {
      apiClient
        .get(`playlists/${location.state.id}/tracks`)
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}






