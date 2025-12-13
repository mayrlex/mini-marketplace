import { API_ENDPOINT, API_URL } from "../config";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/${API_ENDPOINT.products}`);
  return response.json();
};
