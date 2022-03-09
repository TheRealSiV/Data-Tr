function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      usersService: null
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
      addUser: function (){
        let name = document.getElementById("name").value;
        let city = document.getElementById("city").value;

        this.usersService.put(name, city).then(response => (this.users = response.data));;
      },

      deleteUser: function (){
        let name = document.getElementById("name").value;

        //delet this /\
      }

    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
