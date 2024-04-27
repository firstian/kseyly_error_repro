"use client";
import { useFormState } from "react-dom";
import { formState, serverAction } from "./action";
import styles from "./page.module.css";

export default function Home() {
  const [result, formAction] = useFormState(serverAction, {result: ""});

  return (
    <main className={styles.main}>
      <form action={formAction} className={styles.center}>
        <label>Key: 
          <input name="row_key"/>
        </label>
        <button type="submit">Submit</button>
        <h2>Result</h2>
        <code>{JSON.stringify(result, null, 2)}</code>
      </form>
    </main>
  );
}
