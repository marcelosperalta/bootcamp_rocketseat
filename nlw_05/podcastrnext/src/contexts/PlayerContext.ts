import { createContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    // episodeList: Array<Episode>
    episodeList: Episode[];
    currentEpisodeIndex: number;
    play: (episode: Episode) => void;
}

// export const PlayerContext = createContext({
//     episodeList: [],
//     currentEpisodeIndex: 0,
// });
// // or
export const PlayerContext = createContext({} as PlayerContextData);
