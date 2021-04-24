import Image from 'next/image';
// import { useContext, useRef, useEffect } from 'react';
import { useRef, useEffect } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

// import { PlayerContext } from '../../contexts/PlayerContext';
import { usePlayer } from '../../contexts/PlayerContext';

import styles from './styles.module.scss';


{/* Play buttons from "Latest episodes" section */}
export function Player() {
    const audioRef = useRef<HTMLAudioElement>(null);

    // const player = useContext(PlayerContext);
    const { 
        episodeList, 
        currentEpisodeIndex, 
        isPlaying, 
        togglePlay,
        setPlayingState,
        playPrevious,
        playNext,
        hasPrevious,
        hasNext,
    // } = useContext(PlayerContext);
    } = usePlayer();

    useEffect(() => {

        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

    }, [isPlaying])

    const episode = episodeList[currentEpisodeIndex];

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Playing now"/>
                {/* <strong>Playing now {player}</strong> */}
                {/* <strong>Playing now {episode?.title}</strong> */}
                <strong>Playing now</strong>
            </header>

            { episode ? (
                <div className={styles.currentEpisode}>
                    <Image 
                        width={592} 
                        height={592} 
                        src={episode.thumbnail} 
                        objectFit="cover" 
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={styles.emptyPlayer}>
                    <strong>Select a Podcast</strong>
                </div>
            ) }

            {/* <footer className={styles.empty}> */}
            <footer className={!episode ? styles.empty : ''}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider} >
                        {/* <div className={styles.emptySlider} /> */}
                        { episode ? (
                            <Slider 
                                trackStyle={ { backgroundColor: '#04d361' } }
                                railStyle={{ backgroundColor: '#9f75ff' }}
                                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
                            />
                        ) : (
                            <div className={styles.emptySlider} />
                        )}
                    </div>
                    <span>00:00</span>
                </div>

                { episode && (
                    <audio 
                        src={episode.url}
                        ref={audioRef}
                        autoPlay
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    />
                ) }

                <div className={styles.buttons}>
                    <button type="button" disabled={!episode}>
                        <img src="/shuffle.svg" alt="Shuffle"/>
                    </button>

                    <button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
                        <img src="/play-previous.svg" alt="Previous"/>
                    </button>

                    <button 
                        type="button" 
                        className={styles.playButton} 
                        disabled={!episode}
                        onClick={togglePlay}
                    >
                        { isPlaying 
                            ? <img src="/pause.svg" alt="Pause"/>
                            : <img src="/play.svg" alt="Play"/>
                        }
                    </button>

                    <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
                        <img src="/play-next.svg" alt="Next"/>
                    </button>

                    <button type="button" disabled={!episode}>
                        <img src="/repeat.svg" alt="Repeat"/>
                    </button>
                </div>
            </footer>
        </div>
    )
}