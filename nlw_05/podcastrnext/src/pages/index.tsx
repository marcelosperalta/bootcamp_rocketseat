// import { Header } from "../components/Header";

// * single-page application (SPA) *
// import { useEffect } from "react"

// * single-page application (SPA) *
// export default function Home() {
// * server-side scripting (SSR) *
export default function Home(props) {
  console.log(props.episodes);
  
  // * single-page application (SPA) *
  //    - it is a bad strategy to use with web crawlers
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div>
      {/* <Header /> */}
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
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
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return { 
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
