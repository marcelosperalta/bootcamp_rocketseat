import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import Head from 'next/head';
// import { useContext } from 'react';
// import { PlayerContext } from '../../contexts/PlayerContext';
// import { useRouter} from 'next/router'
import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { usePlayer } from '../../contexts/PlayerContext';

import styles from './episode.module.scss'

type Episode = {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
    members: string;
    duration: number;
    durationAsString: string;
    url: string;
    publishedAt: string;
}

type EpisodeProps = {
    episode: Episode;
}

export default function Episode ( { episode }: EpisodeProps) {
    
    // // fallback: true 
    // const router = useRouter();
    // if (router.isFallback) {
    //     return <p>Loading...</p>
    // }

    // const {  } = useContext(PlayerContext)
    const { play } = usePlayer();

    return (
        // <h1>{episode.title}</h1>
        <div className={styles.episode}>

            <Head>
                <title>{episode.title} | Podcastr</title>
            </Head>

            <div className={styles.thumbnailContainer}>
                <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Go back"/>
                    </button>
                </Link>

                <Image 
                    width={700} 
                    height={160} 
                    src={episode.thumbnail} 
                    objectFit="cover" 
                />

                <button type="button" onClick={() => play(episode)}>
                    <img src="/play.svg" alt="Play"/>
                </button>
            </div>

            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
            </header>

            {/* <div className={styles.description}>
                {episode.description}
            </div> */}
            <div 
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: episode.description }}
            />

        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('episodes', {
        params: {
          _limit: 2,
          _sort: 'published_at',
          _order: 'desc'
        }
    })

    const paths = data.map(episode => {
        return {
            params: {
                slug: episode.id
            }
        }
    })

    return {
        // paths: []
        // paths: [
        //     { params: { slug: 'a-importancia-da-contribuicao-em-open-source' }}
        // ],
        paths,

        // fallback: false
        // fallback: true 
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    
    const { slug } = context.params;

    const { data } = await api.get(`/episodes/${slug}`)
    
    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data. thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'PPP'),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
      }

    return {
        props: {
            episode,
        },
        revalidate: 60 * 60 * 24, // 24 hours
    }
}