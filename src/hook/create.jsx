<<<<<<< HEAD
const API = 'http://localhost:3004';
=======
const API = 'http://localhost:8080/api';
>>>>>>> 72d320cf5cb83bdd164201481b4e5835cf907006

export async function createUser(user) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${API}/users`, payload);
    const data = await response.json();
    // eslint-disable-next-line
    console.log(data);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export async function createNft(nft) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nft),
  };

  try {
    const response = await fetch(`${API}/products`, payload);
    const data = await response.json();
    // eslint-disable-next-line
    console.log(data);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}
