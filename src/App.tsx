import './App.css'
import { NEOCard } from './components/Card/Card';
import { INEO } from './types/NEO';

const neo: INEO = {
    size: 20,
    speed: 30,
    distance: 50,
    number: 100,
    hasLargeNumber: true
}

function App() {
    return (
        <>
            <NEOCard data={neo} />
        </>
    )
}

export default App
