import React, { useState, useEffect } from "react";
import "./questionnaire.css";

const questions = [
    "Do you feel like things have been going your way lately?",
    "Have you been feeling burdened recently?",
    "Have you been feeling optimistic about things?",
    "Lately, have you found yourself feeling more frustrated than usual?",
    "Have you been experiencing a greater sense of relaxation lately?",
    "Have you found yourself feeling more vulnerable or anxious in certain situations recently?",
    "Have you been feeling uplifted or cheerful lately?",
    "Have you been sleeping well lately?",
    "Have you been feeling content?",
    "Have you been feeling a bit heavier emotionally lately?",
    "Have you been exploring any new interests or hobbies lately?",
    "Have you been reflecting on any decisions or actions lately?",
    "Have you found yourself feeling less like yourself lately?",
    "Have you been able to find joy in the small things lately?",
    "How have your spirits been lately?",
    "How have you been coping with the recent events in your life?",
    "Have you been experiencing moments of sadness more frequently?",
    "Do you feel like a weight has been lifted off your chest?",
    "Is something exciting coming up?",
    "Do you feel particularly impatient lately?",
    "Have you encountered any pleasant surprises recently?",
    "Have you had any unexpected setbacks?",
    "Are you finding it harder to maintain a positive mindset?",
    "Have you been maintaining a healthy lifestyle lately?",
    "Do you feel like you're in need of support?",
    "Do you find yourself reflecting more on the past?"
];

const emojiScale = {
    "😊": 5,
    "🙂": 4,
    "😐": 3,
    "🙁": 2,
    "😢": 1
};

const getRandomQuestions = (questions, count) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const moodPlaylistMap = {
    "Very Happy (Sukh)": "05jdHjl9gAFnGWB4aeDvJP",
    "Content": "playlist_id_content",
    "Neutral": "0SmCNZY9JJD9mJPUa7m370",
    "Anxious": "0eU3ubPAnqeSMi9K3YKVpC",
    "Stressed": "567vbUPRvKnTyrvMhWLFz5",
    "Very Sad (Dukh)": "2N18yFIltfjeTw2gpx7GzD"
};

const categorizeMood = (meanScore) => {
    if (meanScore >= 4.5) {
        return "Very Happy (Sukh)";
    } else if (meanScore >= 3.5) {
        return "Content";
    } else if (meanScore >= 2.5) {
        return "Neutral";
    } else if (meanScore >= 2.0) {
        return "Anxious";
    } else if (meanScore >= 1.5) {
        return "Stressed";
    } else {
        return "Very Sad (Dukh)";
    }
};

const Questionnaire = ({ onComplete }) => {
    const [responses, setResponses] = useState({});
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        setSelectedQuestions(getRandomQuestions(questions, 5));
    }, []);

    const handleChange = (question, value) => {
        setResponses({ ...responses, [question]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const scores = Object.values(responses).map(response => emojiScale[response]);
        const meanScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        const mood = categorizeMood(meanScore);
        const playlistId = moodPlaylistMap[mood];
        console.log("Mean Score:", meanScore, "Mood:", mood, "Playlist ID:", playlistId);
        onComplete(mood, playlistId);
    };

    return (
        <div>
            <h1>Answer the following questions with emojis</h1>
            <form id="questionnaire-form" onSubmit={handleSubmit}>
                {selectedQuestions.map((question, index) => (
                    <div className="question" key={index}>
                        <p>{question}</p>
                        <div className="emojis">
                            {Object.keys(emojiScale).map((emoji) => (
                                <label key={emoji}>
                                    <input
                                        type="radio"
                                        name={question}
                                        value={emoji}
                                        onChange={() => handleChange(question, emoji)}
                                        required
                                    />
                                    {emoji}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Questionnaire;














