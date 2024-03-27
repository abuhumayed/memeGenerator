import Troll from '../../public/images/troll-face.png'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-dpurple to-lpurple p-7 flex items-center gap-4">
      <img src={Troll} alt="Troll face" width={70} className="" />
      <h2 className="text-2xl text-white ">Meme Generator</h2>
    </div>
  )
}
