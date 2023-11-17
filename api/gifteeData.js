const getAllGiftees = () => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/giftees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleGiftee = (gifteeId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/giftee/${gifteeId}`, {
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

const getUserGiftees = (userId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/userGiftees/${userId}`, {
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

const createGiftee = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/giftee', {
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

const updateGiftee = (gifteeid, payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/updateGiftee/${gifteeid}`, {
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

export {
  getAllGiftees,
  getSingleGiftee,
  getUserGiftees,
  // deleteSingleGift,
  updateGiftee,
  createGiftee,
};
