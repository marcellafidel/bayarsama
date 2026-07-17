function DetailNota({ nota, setNota }) {
  function handleChange(field, rawValue) {
    // Biarkan kosong kalau user emang lagi hapus semua angka
    if (rawValue === "") {
      setNota({ ...nota, [field]: "" })
      return
    }
    setNota({ ...nota, [field]: Number(rawValue) })
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="step-number">1</span>
        <h2>Detail Nota Asli</h2>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>GRAND TOTAL NOTA (RUPIAH)</label>
          <div className="input-prefix">
            <span>Rp</span>
            <input
              type="number"
              value={nota.grandTotal === 0 ? "" : nota.grandTotal}
              onChange={(e) => handleChange("grandTotal", e.target.value)}
              placeholder="0"
            />
          </div>
          <small>Sesuai nominal akhir pembayaran dikasir</small>
        </div>

        <div className="form-group">
          <label>DISKON / POTONGAN</label>
          <div className="input-prefix">
            <span>Rp</span>
            <input
              type="number"
              value={nota.diskon === 0 ? "" : nota.diskon}
              onChange={(e) => handleChange("diskon", e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-group">
          <label>PAJAK (PB1/PPN)</label>
          <div className="input-suffix">
            <input
              type="number"
              value={nota.pajak === 0 ? "" : nota.pajak}
              onChange={(e) => handleChange("pajak", e.target.value)}
              placeholder="0"
            />
            <span>%</span>
          </div>
        </div>

        <div className="form-group">
          <label>BIAYA LAYANAN (SERVICE)</label>
          <div className="input-suffix">
            <input
              type="number"
              value={nota.biayaLayanan === 0 ? "" : nota.biayaLayanan}
              onChange={(e) => handleChange("biayaLayanan", e.target.value)}
              placeholder="0"
            />
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailNota