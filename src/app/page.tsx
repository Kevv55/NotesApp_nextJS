import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Notes App",
  description: "Created by Kelvin Fumo",
};

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home Page</h1>
        <p>Landing page for my notes app</p>
        <p>Click on the Notes link in the navbar...</p>
      </div>
    </main>
  );
}
