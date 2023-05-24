import PropTypes from 'prop-types'

const Card = ({ gif }) => {
	const { title, images } = gif
	return (
		<div className='bg-gray-400 w-full h-full mx-2'>
			<img src={images.original.url} alt={title} />
		</div>
	)
}

Card.propTypes = {
	gif: PropTypes.object,
}

export default Card
