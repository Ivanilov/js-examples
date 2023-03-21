export const getNews = (search, page) => {
    const params = new URLSearchParams({
        q: search,
        apiKey: process.env.NEWS_API_KEY,
        pageSize: 10,
        page,
        sortBy: 'publishedAt'
    });
    return fetch(`https://newsapi.org/v2/everything?${params.toString()}`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
            return response.json();
        });
};