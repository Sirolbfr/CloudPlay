import React from 'react'

import Logo from '../assets/logo.png'
import Games from '../assets/games.png'
import Shop from '../assets/shop.png'
import Wishlist from '../assets/wishlist.png'
import Friends from '../assets/friends.png'
import Cog from '../assets/cog.png'
import Pfp from '../assets/pp_loris.png'

export default function Aside() {
  return (
    <>
      <aside>
        <section>
          <img src={Logo} alt="Logo" />
          <a href="/">CloudPlay</a>
        </section>
        <nav>
          <ul className='flex'>
            <li>
              <img src={Games} alt="Library" />
              <a href="/library">Library</a>
            </li>
            <li>
              <img src={Shop} alt="Shop" />
              <a href="/shop">Shop</a>
            </li>
            <li>
              <img src={Wishlist} alt="Wishlist" />
              <a href="/wishlist">Wishlist</a>
            </li>
            <li>
              <img src={Friends} alt="Friends" />
              <a href="/friends">Friends</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Pfp} alt="Profile" />
              <a href="/profile">Sirolbfr</a>
            </li>
            <li>
              <img src={Cog} alt="Settings" />
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
