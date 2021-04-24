// import { Header } from "../components/Header";

// * single-page application (SPA) *
// import { useEffect } from "react"

import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';
// import { useContext } from 'react';
// import { PlayerContext } from '../contexts/PlayerContext';
import { usePlayer } from '../contexts/PlayerContext';

import styles from './home.module.scss'

// type Episode = {
//   id: string,
//   title: string;
//   members: string;
//   published_at: string;
// }

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  // description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

// interface HomeProps {
type HomeProps = {
  // episodes: Array<Episode>
  // // or
  // episodes: Episode[];
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
}

// * single-page application (SPA) *
// export default function Home() {
// * server-side scripting (SSR) *
// export default function Home(props: HomeProps) {
// export default function Home({ episodes }: HomeProps) {
export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  // console.log(props.episodes);
  
  // * single-page application (SPA) *
  //    - it is a bad strategy to use with web crawlers
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  // const player = useContext(PlayerContext);
  // const { play } = useContext(PlayerContext);
  // const { playList } = useContext(PlayerContext);
  const { playList } = usePlayer;

  const episodeList = [...latestEpisodes, ...allEpisodes];

  return (
    <div className={styles.homepage}>
      {/* <Header /> */}

      {/* <h1>Index</h1> */}

      {/* <p>{JSON.stringify(props.episodes)}</p> */}
      {/* <p>{new Date(props.episodes[0].published_at).toLocaleDateString}</p> */}
      {/* <p>{JSON.stringify(props.episodes)}</p> */}

      <section className={styles.latestEpisodes}>
        {/* <h2>Latest episodes {player}</h2> */}
        <h2>Latest episodes</h2>

        <ul>
          {/* {latestEpisodes.map(episode => { */}
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                {/* <a href="">{episode.title}</a> */}
                {/* <img src={episode.thumbnail} alt={episode.title}/> */}
                <Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title} 
                  objectFit="cover"
                />

                <div className={styles.episodeDetails}>
                  {/* <a href="">{episode.title}</a> */}
                  <Link href={`/episodes/${episode.id}`}> 
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                {/* <button type="button" onClick={ () => play(episode) }> */}
                <button type="button" onClick={ () => playList(episodeList, index) }>
                  <img src="/play-green.svg" alt="Play"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className={styles.allEpisodes}>
          <h2>All episodes</h2>

          {/* <table cellSpacing="0"> */}
          {/* or */}
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Guests</th>
                <th>Date</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {allEpisodes.map(episode => { */}
              {allEpisodes.map((episode, index) => {
                return (
                  <tr key={episode.id}>
                    <td style={{ width: 72 }}>
                      <Image
                        width={120}
                        height={120}
                        src={episode.thumbnail}
                        alt={episode.title}
                        objectFit="cover"
                      />
                    </td>
                    <td>
                      {/* <a href={`/episodes/${episode.id}`}>{episode.title}</a> */}
                      <Link href={`/episodes/${episode.id}`}>
                        <a>{episode.title}</a>
                      </Link>
                    </td>
                    <td>{episode.members}</td>
                    <td style={{ width: 200 }}>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                      <button type="button" onClick={() => playList(episodeList, index + latestEpisodes.length)}>
                        <img src="/play-green.svg" alt="Play"/>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </section>
    </div>
  )
}

// * server-side scripting (SSR) *
// export async function getServerSideProps() {
//     const response = await fetch('http://localhost:3333/episodes')
//     const data = await response.json()

//     return { 
//       props: {
//         episodes: data,
//       }
//     }
// }

// * static site generator (SSG) *
//  - only works in production
// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async () => {

  // // with fetch:
  // const response = await fetch('http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc')
  // const data = await response.json()

  // // with axios:
  // const response = await api.get('http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc')
  // const data = response.data
  // // or
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode. thumbnail,
      members: episode.members,
      // publishedAt: episode.published_at
      // publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      publishedAt: format(parseISO(episode.published_at), 'PPP'),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      // description: episode.description,
      url: episode.file.url,
    }
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)

  return { 
    props: {
      // episodes: data,
      // episodes,
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }

}
