import axios from 'axios';

export const fetchImages = async (q, page = 1) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${q}&page=${page}&key=35986982-1e91609b0f68cd8c4b5293b55&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.log(error);
  }
};
