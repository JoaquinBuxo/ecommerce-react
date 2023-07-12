import PropTypes from 'prop-types';

const Image = ({ imgUrl, model }) => {
  return (
    <img
      src={imgUrl}
      alt={model}
      loading='lazy'
      className='h-full w-full object-contain object-center lg:h-full lg:w-full'
    />
  );
};

Image.propTypes = {
  imgUrl: PropTypes.string,
  model: PropTypes.string,
};

export default Image;
