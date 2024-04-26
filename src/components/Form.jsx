import memesData from '../../memesData'

export default function Form() {
  function memeGen() {
    console.log('clicked')
  }
  return (
    <main className="p-7 ">
      <div className="grid grid-cols-2 gap-5">
        <label htmlFor="top-text" className=" hover:text-lpurple">
          Top Text
        </label>
        <input
          id="top-text"
          type="text"
          className="rounded-md border-4 indent-2 "
          placeholder="Top text"
        />
        <label htmlFor="bottom-text" className=" hover:text-lpurple">
          Bottom Text
        </label>
        <input
          id="bottom-text"
          type="text"
          className="rounded-md border-4 indent-2 "
          placeholder="Bottom text"
        />

        <button
          onClick={memeGen}
          className="bg-gradient-to-r from-dpurple to-lpurple  text-white p-2 mt-4 rounded-md col-span-2 border cursor-pointer "
        >
          Get a new meme image 🖼️
        </button>
        <img src="https://i.imgflip.com/4acd7j.png" alt="meme pic" />
      </div>
    </main>
  )
}
