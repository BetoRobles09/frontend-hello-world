import { useState } from 'react'
import Card from './components/Card'

function App() {
	const [data, setData] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	const handleChange = (e) => {
		setSearchQuery(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetchAPI(searchQuery)
	}

	const fetchAPI = async (query) => {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=U1xGwtYuloYC9R4X1x0HTgnIUGPh03q8&q=${query}&limit=5&offset=0&rating=g&lang=en`
		const res = await fetch(url)
		const gifData = await res.json()
		console.log(gifData.data)
		setData(gifData.data)
	}

	console.log(searchQuery)

	return (
		<main className='container mx-auto h-screen bg-gray-300'>
			<div className='flex justify-center bg-black py-6'>
				<h1 className='text-4xl font-bold font-sans text-white'>Random GIFs</h1>
			</div>
			<form>
				<div className='flex my-6 w-full ml-6'>
					<input
						className='placeholder:italic placeholder:text-slate-400 block bg-white w-60 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
						placeholder='Search for anything...'
						type='text'
						name='search'
						onChange={handleChange}
					/>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2'
						onClick={(e) => handleSubmit(e)}>
						Search
					</button>
				</div>
			</form>
			<div className='flex justify-between mx-6 my-6'>
				{data.length === 0 ? (
					<p>No Gifs found. Type a word to display some Gifs</p>
				) : (
					data.map((gif) => <Card key={gif.id} gif={gif} />)
				)}
			</div>
		</main>
	)
}

export default App
