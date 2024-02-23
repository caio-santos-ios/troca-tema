import './App.css'
import { Button } from './components/Button';
import photoNigth from "./assets/2410140-rio-a-noite-paisagem-fundo-gratis-vetor.jpg";
import photoSun from "./assets/depositphotos_650649572-stock-photo-peaceful-meadow-atop-hill-aglow.jpg";
import { nigthJotai } from './jotai';
import { useAtom } from 'jotai';


function App() {
  const [nigth] = useAtom(nigthJotai)

  return (
    <main>
      <img src={ nigth ? photoNigth : photoSun } alt="foto-de-paisagem" />
      <div className='container'>
          <Button />
      </div>
    </main>
  )
}

export default App
