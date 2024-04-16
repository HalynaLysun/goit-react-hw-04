import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const KEY = "cpMrNbJR9hAZfCOvirw9MRq6_gAnEEUzO53Wjet5MRo";

export default async function fetchImages(query) {
  const response = await axios.get("", {
    params: {
      query: query,
      //   page: page,
      per_page: 15,
      client_id: KEY,
      orientation: "landscape",
    },
  });

  return response.data;
}
