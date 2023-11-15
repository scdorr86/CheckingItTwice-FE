const getAllYears = () => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/years', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleYear = (yearId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/year/${yearId}`, {
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

const deleteSingleYear = (yearId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/year/${yearId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createYear = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/year', {
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

const updateYear = (yearid, payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/updateYear/${yearid}`, {
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
  getAllYears,
  getSingleYear,
  deleteSingleYear,
  updateYear,
  createYear,
};
