"use client";
import { useRouter } from "next/navigation";
import styles from "./../Notes.module.css";

export default function DeleteNote({ noteID }: any) {
  const router = useRouter();
  const deleteNote = async () => {
    await fetch(
      `http://127.0.0.1:8090/api/collections/Notes/records/${noteID}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  };

  return (
    <button onClick={deleteNote} className={styles.Icon}>
      X
    </button>
  );
}
