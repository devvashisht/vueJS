// You may of course also outsource this script code into a separate file (e.g. app.js) and simply import this file here
new Vue({
  el: "#app",
  data: {
    title: "app Title using v-once",
    greeting: "Hello World!",
    link: "http://google.com",
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    changeGreeting: function (event) {
      this.greeting = event.target.value;
    },
    sayHello: function (event) {
      return "Name is Dev (Method binding)";
    },
    increase: function (step) {
      this.counter += step;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert("Alert");
    },
  },
});
