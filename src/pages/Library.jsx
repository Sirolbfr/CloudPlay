import React from 'react'
import GameCard from '../components/GameCard.jsx';

export default function Library() {
  const steamAppIds = [730,570,578080,2275190,252490,1172470,431960,1210510,1390350,2664100,1086940,429714,359550,230410,1091500,1245620,1587920,1517290,1599340];

  return (
    <section>
      <GameCard />
      <GameCard id={steamAppIds[Math.ceil(Math.random() * 19)]} />
    </section>
  )
}