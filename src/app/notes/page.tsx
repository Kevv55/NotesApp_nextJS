//This route fetches all the notes form pocketbase
// and provides a form to create a new note
import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./[id]/CreateNote";
import { IoMdClose } from "react-icons/io";
import DeleteNote from "./[id]/DeleteNote";

// Pocket base comes with built in REST API
// that points to the notes collection and retreives a paginated list
// of results
async function getNotes() {
  // use {cache: "no-store"} to avoid next caching
  // this way it will re*fecth the items from the server
  // on every request
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/Notes/records`,
    { cache: "no-store" }
  );
  console.log(res.status);
  const data = await res.json();
  // console.log(data);
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  // console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

async function Note({ note }: any) {
  const { id, Title, Notes, created } = note || {};
  async function handleClick() {
    console.log("trial");
  }

  return (
    //
    <div className={styles.note}>
      <div className={styles.closeIcon}>
        <DeleteNote noteID={id} />
      </div>
      <Link href={`/notes/${id}`}>
        <h2>{Title}</h2>
        <h5>{Notes}</h5>
        <p style={{ fontSize: "75%" }}>{"Created: " + created}</p>
      </Link>
    </div>
  );
}
