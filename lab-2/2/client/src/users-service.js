function users() {
  get = function () {
    return axios.get('http://localhost:3000/users');
  };

  return {
    get: get,
  };
}

function putUsers(name, city){

  put = function (name, city) {
    axios.put('http://localhost:3000/users', {
      name: name,
      city: city,
    }).then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res)
    })
        .catch(error => {
          console.error(error)
        })
  }
  return users();
}
