import { useEffect, useRef, useState } from 'react';
import './AutoPlayerList.css'
import PropTypes from 'prop-types'

const AutoPlayerList = ({ audioFiles, className }) => {
    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
    const audioRef = useRef(null);

    // Move to next audio file when one ends
    const handleAudioEnd = () => {
        setCurrentAudioIndex((prevIndex) =>
            prevIndex + 1 < audioFiles.length ? prevIndex + 1 : 0
        );
    };

    // Effect to play audio when the source changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, [currentAudioIndex]);

    // Return null if audioFiles is empty
    if (!audioFiles || audioFiles.length === 0) {
        return null;
    }
    return (

        <audio
            className={className}
            kind='captions'
            ref={audioRef}
            src={audioFiles[currentAudioIndex].audio.audio || audioFiles[currentAudioIndex].audio.audioSecondary}
            onEnded={handleAudioEnd}
            controls
        />
    )
}
AutoPlayerList.propTypes = {
    audioFiles: PropTypes.object,
    className: PropTypes.string


}
export default AutoPlayerList