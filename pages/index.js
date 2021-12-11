import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const armHouse = async(event) => {
    event.preventDefault()
    fetch("https://ihome.app.vtxhub.com/lock").then((value) => {
      if (value.status == 200){
        window.location.reload();
      }
    })
  }
  const disarmHouse = async(event) => {
    event.preventDefault()
    fetch("https://ihome.app.vtxhub.com/unlock").then((value) => {
      if (value.status == 200){
        window.location.reload();
      }
    })
  }
  const openDoor = async(event) => {
    event.preventDefault()
    fetch("https://ihome.app.vtxhub.com/reset").then((value) => {
      if (value.status == 200){
        window.location.reload();
      }
    })
  }
  const closeDoor = async(event) => {
    event.preventDefault()
    fetch("https://ihome.app.vtxhub.com/set").then((value) => {
      if (value.status == 200){
        window.location.reload()
      }
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>iHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to iHome Control
        </h1>

        <div className={styles.grid}>
          <button onClick={armHouse} className={styles.card}>
            <h2>Arm House</h2>
            <p>Turn on your alarm system</p>
          </button>

          <button
            onClick={disarmHouse}
            className={styles.card}
          >
            <h2>Disarm House</h2>
            <p>Turn off your alarm system</p>
          </button>
          <button onClick={openDoor} className={styles.card}>
            <h2>Open Door</h2>
            <p>Open your door through the internet</p>
          </button>
          <button
            onSubmit={closeDoor}
            className={styles.card}
          >
            <h2>Close Door</h2>
            <p>Open your door through the internet</p>
          </button>
        </div>
      </main>
    </div>
  )
}
