import CandidatesList from "./components/CandidatesList.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <>
        <div className="top-0">
            <Navbar/>
        </div>

        <div className="grid grid-cols-3">
            <CandidatesList />
        </div>
    </>
  )
}

export default App
