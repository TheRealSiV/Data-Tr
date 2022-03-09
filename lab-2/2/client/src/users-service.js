function users() {

  get = function () {
    return axios.get('http://localhost:3000/users');
  };

  put = function (name, city) {
    return axios.put('http://localhost:3000/users', {
      name: name,
      city: city
    }).then((get))
        .catch(err => {
          console.log(err);
        })
  };
  return {
    get: get,
    put: put
  };
}

function putUsers(name, city){

  return users();
}
