import axios from 'axios';

const url = 'https://api.kanye.rest';

export const fetchData = async () => {
  try {
    const {
      data: { quote },
    } = await axios.get(url);
    return { quote };
  } catch (error) {
    console.log(error);
  }
};
