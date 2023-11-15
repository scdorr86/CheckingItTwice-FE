const getAllGifts = () => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/gifts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleGift = (giftId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/gift/${giftId}`, {
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

const deleteSingleGift = (giftId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/gift/${giftId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createGift = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/gift', {
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

const updateGift = (giftid, payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/updateGift/${giftid}`, {
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
  getAllGifts,
  getSingleGift,
  deleteSingleGift,
  updateGift,
  createGift,
};
