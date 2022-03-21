function users() {
  var usersURL = 'http://localhost:3000/users/';
  get = function () {
    return axios.get(usersURL);
  };

  put = function (name, city) {
    return axios.put(usersURL, {
      name: name,
      city: city
    }).then(get)
        .catch(err => {
          console.log(err);
        })
  };

  del = async function (pos){
    return await axios.
    delete(usersURL + pos, {})
        .then(get)
        .catch(err => {
          console.log(err);
        });
  };

  return {
    get: get,
    put: put,
    delete: del
  };
}

function putUsers(name, city){

  return users();
}
