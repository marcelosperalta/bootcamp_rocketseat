// import             "./App.css";
// import styles from "./App.module.css";
   import styles from "./App.module.scss";

import { MessageList } from "./components/MessageList";
import { LoginBox } from "./components/LoginBox";

//     function App() {
export function App() {

  return (
//  <main className="contentWrapper">
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}
// export default App
