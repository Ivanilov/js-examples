import axios from 'axios';

class ApiClient {
    static getListItems = (id = null) => {
        return this.makeRequest({ method: 'GET' }, id);
    };

    static addItem = (item) => {
        return this.makeRequest({ method: 'POST', body: JSON.stringify(item) });
    };

    static updateItem = (id, item) => {
        return this.makeRequest({ method: 'PATCH', body: JSON.stringify(item) }, id);
    };

    static deleteItem = (id) => {
        return this.makeRequest({ method: 'DELETE' }, id);
    };

    static makeRequest = (params, id = null) => {
        return fetch(
            `http://localhost:3000/list${id ? `/${id}` : ''}`,
            {
                ...params,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error in request: ${response.status}`);
            }
            return response.json();
        })
        .catch(e => console.error(e));
    };
};

export default ApiClient;