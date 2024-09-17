import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Favourites from "../favourites";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import Sidebar from "../../components/sidebar";
import "./home.css";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";
import Questionnaire from "../../components/question/questionnaire";
import Signout from "../signout/signout";

export default function Home() {
    const [token, setToken] = useState("");
    const [favoriteSongs, setFavoriteSongs] = useState([]);
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState(false);
    const [playlistId, setPlaylistId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }
    }, []);

    const addSongToFavorites = (song) => {
        setFavoriteSongs([...favoriteSongs, song]);
    };

    const handleQuestionnaireComplete = (mood, playlistId) => {
        setQuestionnaireCompleted(true);
        setPlaylistId(playlistId);
        navigate("/player", { state: { id: playlistId } });
    };

    return !token ? (
        <Login />
    ) : !questionnaireCompleted ? (
        <Questionnaire onComplete={handleQuestionnaireComplete} />
    ) : (
        <div className="main-body">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Library addSongToFavorites={addSongToFavorites} />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/player" element={<Player />} />
                <Route path="/favourites" element={<Favourites favoriteSongs={favoriteSongs} />} />
               <Route path="/signout" element={<Signout />} />
            </Routes>
        </div>
    );
}

/*import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import Sidebar from "../../components/sidebar";
import "./home.css";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";
import Questionnaire from "../../components/question/questionnaire";
import Signout from "../signout/signout"; // Import Signout component

export default function Home() {
    const [token, setToken] = useState("");
    const [favoriteSongs, setFavoriteSongs] = useState([]);
    const [questionnaireCompleted, setQuestionnaireCompleted] = useState(false);
    const [playlistId, setPlaylistId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }
    }, []);

    const addSongToFavorites = (song) => {
        setFavoriteSongs([...favoriteSongs, song]);
    };

    const handleQuestionnaireComplete = (mood, playlistId) => {
        setQuestionnaireCompleted(true);
        setPlaylistId(playlistId);
        navigate("/player", { state: { id: playlistId } });
    };

    return !token ? (
        <Login />
    ) : !questionnaireCompleted ? (
        <Questionnaire onComplete={handleQuestionnaireComplete} />
    ) : (
        <div className="main-body">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Library addSongToFavorites={addSongToFavorites} />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/player" element={<Player />} />
                <Route path="/favourites" element={<Favourites favoriteSongs={favoriteSongs} />} />
                <Route path="/signout" element={<Signout />} /> 
            </Routes>
        </div>
        
    );
}*/
