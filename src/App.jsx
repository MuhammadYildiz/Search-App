
import { useState } from "react"
import images from "./Images"

function App() {
	const [inpuValue, setInputVlaue] = useState("")
	console.log(inpuValue);

	return (
		<div className="">
			<div className="text-center">
				<h1 className="text-3xl text-cyan-500 p-5">Programmering Langiage</h1>
				<input className="border-2 border-cyan-500 min-w-[200px] outline-none p-1 px-3 rounded-3xl mb-10"
					type="search" name="" id=""
					placeholder="Search propgrammering language"
					value={inpuValue}
					onChange={(e) => setInputVlaue(e.target.value)}
					onFocus={() => setInputVlaue("")}
				/>
			</div>
			<div className="flex flex-col sm:flex-row flex-wrap justify-center">
				{images.map((image) => {
					if (image.title.toLocaleLowerCase().includes(inpuValue.toLocaleLowerCase())) {
						return (
							<div key={image.id} className='bg-zinc-500 m-2 md:m-5 w-[95%]  sm:w-[30%]  flex flex-col items-center text-white rounded-xl'>
								<img src={image.src} alt="" className='h-[150px] rounded-3xl w-xs p-5 items-center' />
								<h3>{image.title} </h3>
								<p className='p-3'>{image.text}</p>
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export default App
