import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <nav classname="navbar">
        <ul>
            <li><a href="#">Pemesanan Saya</a></li>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Info Toko</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}
