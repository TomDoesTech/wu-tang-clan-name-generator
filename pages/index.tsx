import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [wuName, setWuName] = useState("");

  async function handleRequest() {
    const { data } = await axios.get(`/api/name?name=${name}`);

    setWuName(data.name);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Wu-Tang Clan Name Generator</title>
        <meta name="description" content="GWu-Tang Clan Name Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="form">
          {wuName && (
            <p>
              {name}! You will now be known as
              <br />
              <span className="wu-name">{wuName}</span>
            </p>
          )}

          <input
            placeholder="Your name"
            onChange={(e) => {
              setName(e.target.value);
              setWuName("");
            }}
          />

          <button onClick={() => handleRequest()}>Generate name</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
