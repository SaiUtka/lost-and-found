const fetchAllItems = () => {
    return fetch('http://localhost:3001/items');
};

const fetchItem = (id) => {
    return fetch(`http://localhost:3001/items/${id}`);
};

const postItem = (newItem) => {
    return fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    });
};

const deleteChosenItem = (id) => {
    return fetch(`http://localhost:3001/items/${id}`, {
        method: 'DELETE'
    });
};

export {fetchAllItems, fetchItem, postItem, deleteChosenItem};