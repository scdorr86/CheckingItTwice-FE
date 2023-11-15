const getAllLists = () => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/lists', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleList = (listId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/list/${listId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res?.ok) {
        data = await res?.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const deleteSingleList = (listId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/list/${listId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createList = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateList = (listid, payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/updateList/${listid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const addGift = (listId, giftId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/list/${listId}/gifts/${giftId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeGift = (listId, giftId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/lists/${listId}/gifts/${giftId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllLists,
  getSingleList,
  deleteSingleList,
  updateList,
  createList,
  addGift,
  removeGift,
};
