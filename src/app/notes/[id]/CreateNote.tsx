// We need this component to be rendered on the client side
"use client";
import styles from "./../Notes.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const create = async () => {
    await fetch(`http://127.0.0.1:8090/api/collections/Notes/records`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ Title, Notes }),
    });

    setNotes("");
    setTitle("");

    router.refresh();
  };

  return (
    <form onSubmit={create} className={styles.note}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className={styles.form}
      />
      <textarea
        className={styles.formcontent}
        placeholder="Note content"
        value={Notes}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
      />
      <button type="submit" className={styles.submitbutton}>
        Create note
      </button>
    </form>
  );
}
