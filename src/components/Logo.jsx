function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* halo tipis di luar */}
      <circle cx="50" cy="50" r="49" fill="#F4EEFC" />
      {/* lingkaran ungu utama */}
      <circle cx="50" cy="50" r="40" fill="#CBAAF0" />

      {/* bayangan tipis di belakang kartu nota */}
      <rect x="33" y="27" width="34" height="42" rx="9" fill="#B999E6" />
      {/* kartu nota putih */}
      <rect x="31" y="24" width="34" height="42" rx="9" fill="#FFFFFF" />

      {/* tiga garis teks di dalam nota */}
      <rect x="39" y="35" width="18" height="3" rx="1.5" fill="#A87AE0" />
      <rect x="39" y="45" width="18" height="3" rx="1.5" fill="#A87AE0" />
      <rect x="39" y="55" width="13" height="3" rx="1.5" fill="#A87AE0" />
    </svg>
  )
}

export default Logo