import './App.css'
import { NEOList } from './components/NEOList/NEOList';
import { NEOs } from './mock';

function App() {
    return (
        <>
            <NEOList neoData={NEOs} />
        </>
    )
}

export default App
