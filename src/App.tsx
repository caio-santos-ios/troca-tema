import { useAtom } from 'jotai';
import './App.css';
import { Button } from './components/Button';
import { nigthJotai } from './jotai';
import { useEffect } from 'react';

function App() {
  const [nigth] = useAtom(nigthJotai)

  useEffect(() => {
    const body = document.querySelector("body")
    if(nigth) {
      body.style.background = 'black'
    } else {
      body.style.background = 'white'
    }
  }, [nigth])

  return (
    <main>
      <div className='container'>
          <Button />
      </div>
    </main>
  )
}

export default App
