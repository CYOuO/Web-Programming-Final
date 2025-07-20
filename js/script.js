var a;
console.log(1);
this.scroll = { click: true };
var app = new Vue({
  el: "#app",
  click: true,
  data: {
    currentSlide: 0,
    isPreviousSlide: false,
    isFirstLoad: true,
    slides: [
      {
        headlineFirstLine: "Dream",
        headlineSecondLine: "Factory",
        headlineButton: "關於我們",
        sublineFirstLine: "Dream come true",
        sublineSecondLine: "you want",
        bgImg: "./img/a1.png",
        rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg",
        side: "#we",
      },
      {
        headlineFirstLine: "Special",
        headlineSecondLine: "Offer!",
        headlineButton: "最新優惠",
        sublineFirstLine: "Our Super Sale ends soon!",
        sublineSecondLine: "buy it",
        bgImg: "./img/aa2.png",
        rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg",
        side: "#sale",
      },
      {
        headlineFirstLine: "Join",
        headlineSecondLine: "Membership",
        headlineButton: "關於會員",
        sublineFirstLine: "the more discounts you have",
        sublineSecondLine: "join us",
        bgImg: "./img/a3.png",
        rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
        side: "#member",
      },
    ],
  },

  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
    var startX = 0;
    var endX = 0;

    productRotatorSlide.addEventListener(
      "touchstart",
      (event) => (startX = event.touches[0].pageX)
    );

    productRotatorSlide.addEventListener(
      "touchmove",
      (event) => (endX = event.touches[0].pageX)
    );

    productRotatorSlide.addEventListener(
      "touchend",

      function (event) {
        var threshold = startX - endX;

        if (threshold < 150 && 0 < this.currentSlide) {
          click(this.currentSlide);
          this.currentSlide--;
        }
        if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
          click(this.currentSlide);
          this.currentSlide++;
        }
      }.bind(this)
    );
  },
  methods: {
    updateSlide(index) {
      index < this.currentSlide
        ? (this.isPreviousSlide = true)
        : (this.isPreviousSlide = false);
      this.currentSlide = index;
      this.isFirstLoad = false;
    },
  },
});
