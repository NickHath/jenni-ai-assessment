import io from "socket.io-client";
import { useState, useEffect } from "react";
import styles from '@/styles/TextEditor.module.css'

let socket;

export default function TextEditor() {
  const [text, setText] = useState('')

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket = io('http://localhost:8080');
    socket.on('message', (data) => {
      console.log(data)
      setText(data)
  })
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    socket.send(e.target.value)
  }

  return (
    <div className={styles.editor}>
        <textarea
          className={styles['text-area']}
          rows={50} cols={100}
          placeholder='Start here...'
          value={text}
          onChange={handleChange}
        >
        </textarea>
    </div>
  );
}