import axios from 'axios';

const handleSearch = async (query) => {
  try {
    const response = await axios.get(`http://localhost:5244/search?query=${query}`);
    const searchResults = response.data;
    console.log(searchResults);
  } catch (error) {
    console.error('Error fetching search results', error);
  }
};

export default handleSearch;
