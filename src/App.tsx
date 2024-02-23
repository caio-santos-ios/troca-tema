import './App.css'
import { Button } from './components/Button';
import { nigthJotai } from './jotai';
import { useAtom } from 'jotai';


function App() {
  const [nigth] = useAtom(nigthJotai)

  return (
    <main>
      <div className='container'>
          <Button />
      </div>
    </main>
  )
}

export default App
