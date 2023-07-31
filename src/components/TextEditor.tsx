import { useState } from 'react'

export default function TextEditor() {
  const [text, setText] = useState('')

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  console.log(text)

  return (
    <div>
        <textarea
          rows={10} cols={50}
          placeholder='Start here...'
          value={text}
          onChange={handleChange}
        >
        </textarea>
    </div>
  );
}