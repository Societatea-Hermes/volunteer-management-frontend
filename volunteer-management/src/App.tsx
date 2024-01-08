import CandidatesList from "./components/CandidatesList.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <>
        <div className="top-0">
            <Navbar/>
        </div>


        <div className="grid">
            <CandidatesList />
        </div>
    </>
  )
}

export default App
