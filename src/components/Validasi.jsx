function Validasi({ nota, teman }) {
  const subtotalMenu = teman.reduce((acc, t) => {
    return acc + t.pesanan.reduce((a, p) => a + p.harga * p.qty, 0)
  }, 0)

  const pajakMultiplier = 1 + (nota.pajak / 100) + (nota.biayaLayanan / 100)
  const targetNota = nota.grandTotal
  const subtotalSetelahPajak = Math.round(subtotalMenu * pajakMultiplier - nota.diskon)

  const selisih = targetNota - subtotalSetelahPajak
  const persentase = targetNota > 0 ? Math.min((subtotalSetelahPajak / targetNota) * 100, 100) : 0
  const sesuai = Math.abs(selisih) < 2

  function formatRupiah(angka) {
    return "Rp " + Math.abs(angka).toLocaleString("id-ID")
  }

  return (
    <div className={`card validasi-card ${sesuai ? "validasi-ok" : "validasi-warn"}`}>
      <div className="validasi-header">
        <span className="validasi-icon">{sesuai ? "✅" : "ℹ️"}</span>
        <h3>Validasi Keselarasan Angka</h3>
      </div>

      <p className="validasi-desc">
        Sistem memantau keselarasan antara total nota kuitansi dan akumulasi menu makanan yang kamu input agar pembagian adil.
      </p>

      <div className="validasi-progress-bar">
        <div
          className="validasi-progress-fill"
          style={{ width: `${persentase}%`, background: sesuai ? "#22c55e" : "#3b82f6" }}
        />
      </div>

      <div className="validasi-angka">
        <span>Subtotal Menu: <strong>Rp {subtotalMenu.toLocaleString("id-ID")}</strong></span>
        <span>Target Nota: <strong>Rp {targetNota.toLocaleString("id-ID")}</strong></span>
      </div>

      {sesuai ? (
        <p className="validasi-status ok">
          🎉 Sempurna! Akumulasi menu (setelah pajak/service/diskon) persis dengan Grand Total Nota.
        </p>
      ) : selisih > 0 ? (
        <p className="validasi-status warn">
          ⚠️ Kurang {formatRupiah(selisih)} — tambah pesanan atau sesuaikan harga menu.
        </p>
      ) : (
        <p className="validasi-status warn">
          ⚠️ Kelebihan {formatRupiah(selisih)} — kurangi pesanan atau sesuaikan harga menu.
        </p>
      )}
    </div>
  )
}

export default Validasi