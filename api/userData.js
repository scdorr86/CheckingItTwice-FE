const createUser = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:5244/user', {
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

const updateUser = (userid, payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/updateUser/${userid}`, {
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

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5244/userByUid/${uid}`, {
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

export {
  updateUser,
  createUser,
  getUserByUid,
};
