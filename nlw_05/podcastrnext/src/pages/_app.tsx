import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
// import { PlayerContext } from '../contexts/PlayerContext'
// import { useState } from 'react'
import { PlayerContextProvider } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {

  // const [episodeList, setEpisodeList] = useState([]);
  // const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  // function play(episode) {
  //   setEpisodeList([episode]);
  //   setCurrentEpisodeIndex(0);
  //   setIsPlaying(true);
  // }

  // function togglePlay() {
  //   setIsPlaying(!isPlaying);
  // }

  // function setPlayingState(state: boolean) {
  //   setIsPlaying(state);
  // }

  // return <Component {...pageProps} />
  return (
    // <PlayerContext.Provider value={'Marcelo'}>
    // <PlayerContext.Provider value={{ episodeList: [], currentEpisodeIndex: 0 }}>
    //                             { -------------------------------------- context ---------------------------------- }
    // <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}>
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </PlayerContextProvider>
    // </PlayerContext.Provider>
  )
}

export default MyApp
