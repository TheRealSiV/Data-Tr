function run() {
  new Vue({
    el: '#app',
    data: {
      message: '',
      specific: false,
    },
    methods: {
      doSomething: function () {
        console.log('The input string value is: ' + this.message);
        this.specific =  false;
        if(this.message === '123'){
          this.specific =  true;
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
