const API_BASE_URL = 'https://api.tvmaze.com/'



export const getApi = async (query) => {
    const response = await fetch(`${API_BASE_URL}${query}`)

    return response.json();
}