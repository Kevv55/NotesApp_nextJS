import styles from "./../Notes.module.css";

export const metadata = {
  title: "Notes App",
  description: "Created by Kelvin Fumo",
};

async function getNote(noteID: String) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/Notes/records/${noteID}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div>
      <h1>Note/{note.id}</h1>
      {/* <p>Click on the text to update it</p> */}
      <div className={styles.note}>
        <h3>{note.Title}</h3>
        <h5>{note.Notes}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
