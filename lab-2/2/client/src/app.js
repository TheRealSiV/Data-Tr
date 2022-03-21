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
        if(name.length > 2 && city.length > 2) {
          this.usersService.put(name, city)
              .then(response => {this.users = response.data;});
        }
      },

      deleteUser: function (){
        let name = document.getElementById("name").value;
        if(1){
          this.usersService.get().then(response => {this.users = response.data;});
          for (let i = 0; i < this.users.length; i++ ) {
            if(this.users[i].name === name){
              this.usersService.delete(i).then(response => {this.users = response.data});
              break;
            }
          }
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
