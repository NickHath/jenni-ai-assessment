import io from "socket.io-client";
import { useState, useEffect } from "react";

let socket: any;

export default function TextEditor() {
  const [text, setText] = useState('')

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket = io('http://localhost:8080');
    socket.on('message', (data: string) => {
      console.log(data)
      setText(data)
  })
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    socket.send(e.target.value)
  }

  return (
    <div>
        <textarea
          rows={50} cols={100}
          placeholder='Start here...'
          value={text}
          onChange={handleChange}
        >
        </textarea>
    </div>
  );
}