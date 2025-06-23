import React from 'react'
import Logo from '../assets/Logo.png'

export default function Aside() {
  return (
    <>
      <aside>
        <section>
          <img src={Logo} alt="Logo" />
          <a href="/">CloudPlay</a>
        </section>
        <nav>
          <ul>
            <li>
              <img src="" alt="" />
              <a href="/library">Library</a>
            </li>
            <li>
              <img src="" alt="" />
              <a href="/shop">Shop</a>
            </li>
            <li>
              <img src="" alt="" />
              <a href="/wishlist">Wishlist</a>
            </li>
            <li>
              <img src="" alt="" />
              <a href="/friends">Friends</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
