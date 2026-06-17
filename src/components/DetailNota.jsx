function DetailNota({ nota, setNota }) {
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
              value={nota.grandTotal}
              onChange={(e) => setNota({ ...nota, grandTotal: Number(e.target.value) })}
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
              value={nota.diskon}
              onChange={(e) => setNota({ ...nota, diskon: Number(e.target.value) })}
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-group">
          <label>PAJAK (PB1/PPN)</label>
          <div className="input-suffix">
            <input
              type="number"
              value={nota.pajak}
              onChange={(e) => setNota({ ...nota, pajak: Number(e.target.value) })}
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
              value={nota.biayaLayanan}
              onChange={(e) => setNota({ ...nota, biayaLayanan: Number(e.target.value) })}
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