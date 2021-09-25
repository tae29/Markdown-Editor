import React, { useState }from 'react'
import './App.css'

export default function App() {

  const [text, setText] = useState(String)


  return (
    <main>
      <button>RUN</button>
      <section>
        <textarea></textarea>
        <iframe></iframe>
      </section>
    </main>
  )
}