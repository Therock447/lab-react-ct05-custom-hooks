const myHeaders = new Headers();
myHeaders.append('Authorization', 'Bearer KeAaf0aoqCAkb0pxEDt4');

const getOneCharacter = async(id) => {
  return await fetch(`https://the-one-api.dev/v2/character/${id}`, {
    method: 'GET',
    headers: myHeaders
  })
    .then((res) => res.json())
    .then((character) => ({
      id: character.docs[0]._id,
      name: character.docs[0].name,
      species: character.docs[0].race
    }));
};

export default getOneCharacter;
