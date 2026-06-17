import { useState } from "react"
import DetailNota from "./components/DetailNota"
import TemanList from "./components/TemanList"
import HasilPembagian from "./components/HasilPembagian"
import Validasi from "./components/Validasi"

function App() {
  const [nota, setNota] = useState({
    grandTotal: 0,
    diskon: 0,
    pajak: 10,
    biayaLayanan: 0
  })

  const [teman, setTeman] = useState([])

  function resetData() {
    setNota({ grandTotal: 0, diskon: 0, pajak: 10, biayaLayanan: 0 })
    setTeman([])
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-brand">
          <span className="brand-icon">💳</span>
          <div>
            <h1>BayarSama</h1>
            <small>SPLIT BILL SMART APP</small>
          </div>
        </div>
        <button onClick={resetData} className="btn-reset">
          🔄 Reset Data
        </button>
      </header>

      <main className="main-layout">
        <div className="left-col">
          <DetailNota nota={nota} setNota={setNota} />
          <TemanList teman={teman} setTeman={setTeman} />
        </div>
        <div className="right-col">
          <Validasi nota={nota} teman={teman} />
          <HasilPembagian teman={teman} nota={nota} />
        </div>
      </main>
    </div>
  )
}

export default App