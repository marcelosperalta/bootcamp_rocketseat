import format from 'date-fns/format';
// import ptBR from 'date-fns/locale/pt-BR';

// import './styles.module.scss'
import styles from './styles.module.scss';

export function Header() {
    // const currentDate = new Date().toLocaleDateString()
    // https://date-fns.org/v2.21.1/docs/format
    // const currenDate = format(new Date(), 'EEEEEE, d MMMM', {
    //     locale: ptBR,
    // })
    const currenDate = format(new Date(), 'PPP')

    return (
        // <header className="headerContainer">
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>The best content for you</p>

            {/* <span>April 20, 2021</span> */}
            <span>{currenDate}</span>
        </header>
    )
}