import { useState } from "react"

function TemanList({ teman, setTeman }) {
  const [namaBaru, setNamaBaru] = useState("")

  function tambahTeman() {
    if (!namaBaru.trim()) return
    setTeman([
      ...teman,
      {
        id: Date.now(),
        nama: namaBaru.trim(),
        pesanan: []
      }
    ])
    setNamaBaru("")
  }

  function hapusTeman(id) {
    setTeman(teman.filter((t) => t.id !== id))
  }

  function tambahPesanan(id) {
    setTeman(teman.map((t) => {
      if (t.id !== id) return t
      return {
        ...t,
        pesanan: [
          ...t.pesanan,
          { id: Date.now(), menu: "", harga: 0, qty: 1 }
        ]
      }
    }))
  }

  function updatePesanan(temanId, pesananId, field, value) {
    setTeman(teman.map((t) => {
      if (t.id !== temanId) return t
      return {
        ...t,
        pesanan: t.pesanan.map((p) => {
          if (p.id !== pesananId) return p
          return { ...p, [field]: value }
        })
      }
    }))
  }

  function hapusPesanan(temanId, pesananId) {
    setTeman(teman.map((t) => {
      if (t.id !== temanId) return t
      return {
        ...t,
        pesanan: t.pesanan.filter((p) => p.id !== pesananId)
      }
    }))
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="step-number">2</span>
        <h2>Teman Patungan & Menu yang Dipesan</h2>
        <span className="badge">{teman.length} Orang</span>
      </div>

      <div className="tambah-teman">
        <input
          type="text"
          placeholder="Masukkan nama teman (Misal: Ala, Budi...)"
          value={namaBaru}
          onChange={(e) => setNamaBaru(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tambahTeman()}
        />
        <button onClick={tambahTeman} className="btn-tambah">
          + Tambah
        </button>
      </div>

      <div className="teman-grid">
        {teman.map((t) => (
          <div key={t.id} className="teman-card">
            <div className="teman-header">
              <div className="avatar">{t.nama[0].toUpperCase()}</div>
              <span>{t.nama}</span>
              <button onClick={() => hapusTeman(t.id)} className="btn-hapus">✕</button>
            </div>

            <p className="label-pesanan">ISI PIRING MAKAN:</p>

            {t.pesanan.map((p) => (
              <div key={p.id} className="pesanan-row">
                <input
                  type="text"
                  placeholder="Menu"
                  value={p.menu}
                  onChange={(e) => updatePesanan(t.id, p.id, "menu", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Harga"
                  value={p.harga}
                  onChange={(e) => updatePesanan(t.id, p.id, "harga", Number(e.target.value))}
                />
                <input
                  type="number"
                  placeholder="Qty"
                  value={p.qty}
                  min="1"
                  onChange={(e) => updatePesanan(t.id, p.id, "qty", Number(e.target.value))}
                />
                <button onClick={() => hapusPesanan(t.id, p.id)} className="btn-hapus">✕</button>
              </div>
            ))}

            <button onClick={() => tambahPesanan(t.id)} className="btn-tambah-menu">
              + Tambah Pesanan Baru
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemanList