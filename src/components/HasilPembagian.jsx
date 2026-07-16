import { ClipboardList } from "lucide-react"

function HasilPembagian({ teman, nota }) {
  const subtotalMenu = teman.reduce((acc, t) => {
    return acc + t.pesanan.reduce((a, p) => a + p.harga * p.qty, 0)
  }, 0)

  const pajakMultiplier = 1 + (nota.pajak / 100) + (nota.biayaLayanan / 100)

  function hitungTagihan(t) {
    const subtotal = t.pesanan.reduce((a, p) => a + p.harga * p.qty, 0)
    if (subtotalMenu === 0) return 0
    const proporsi = subtotal / subtotalMenu
    const diskonBagian = proporsi * nota.diskon
    return Math.round((subtotal - diskonBagian) * pajakMultiplier)
  }

  const totalPembagian = teman.reduce((acc, t) => acc + hitungTagihan(t), 0)

  function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID")
  }

  function salinWhatsApp() {
    let pesan = "*BayarSama - Rincian Tagihan*\n\n"
    teman.forEach((t) => {
      pesan += `*${t.nama}* — ${formatRupiah(hitungTagihan(t))}\n`
      t.pesanan.forEach((p) => {
        pesan += `  • ${p.menu} (${p.qty}x) — ${formatRupiah(p.harga * p.qty)}\n`
      })
      pesan += "\n"
    })
    pesan += `*Total: ${formatRupiah(totalPembagian)}*`
    navigator.clipboard.writeText(pesan)
    alert("Rincian berhasil disalin! Tinggal paste ke WhatsApp.")
  }

  if (teman.length === 0) return null

  return (
    <div className="card hasil-card">
      <div className="card-header">
        <h2>Hasil Pembagian</h2>
        <span className="badge-live">LIVE CALCULATE</span>
      </div>

      {teman.map((t) => (
        <div key={t.id} className="hasil-teman">
          <div className="hasil-teman-header">
            <div className="avatar">{t.nama[0].toUpperCase()}</div>
            <span className="hasil-nama">{t.nama}</span>
            <span className="hasil-total">{formatRupiah(hitungTagihan(t))}</span>
          </div>
          {t.pesanan.map((p) => (
            <div key={p.id} className="hasil-item">
              <span>{p.menu} ({p.qty} porsi)</span>
              <span>{formatRupiah(p.harga * p.qty)}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="estimasi-total">
        <span>Estimasi Total Pembagian:</span>
        <span>{formatRupiah(totalPembagian)}</span>
      </div>

      <button onClick={salinWhatsApp} className="btn-whatsapp">
        <ClipboardList size={16} strokeWidth={2} />
        Salin Rincian ke WhatsApp
      </button>
    </div>
  )
}

export default HasilPembagian