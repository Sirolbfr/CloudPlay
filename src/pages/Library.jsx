import GameCard from '../components/GameCard.jsx';

export default function Library() {
  const rawgGameSlugs = ["counter-strike-2", "dota-2", "pubg-battlegrounds", "bongo-cat", "rust", "apex-legends", "wallpaper-engine", "delta-force-xtreme", "helldivers-2", "marvel-rivals", "baldurs-gate-3", "grand-theft-auto-v", "tom-clancys-rainbow-six-siege", "warframe", "cyberpunk-2077", "elden-ring", "black-myth-wukong", "palworld", "lost-ark"];


  return (
    <section>
      <GameCard />
      <GameCard slug={rawgGameSlugs[Math.floor(Math.random()*rawgGameSlugs.length)]}/>


    </section>
  )
}