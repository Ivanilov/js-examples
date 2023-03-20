export const getNews = (search) => {
    const params = new URLSearchParams({
        q: search,
        apiKey: process.env.NEWS_API_KEY
    });
    return fetch(`https://newsapi.org/v2/everything?${params.toString()}`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
            return response.json();
        });
};