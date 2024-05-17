$('.owl-carousel').owlCarousel({
  loop:true,
  margin:32,
  nav:true,
  responsive : {
    0 : {
      items: 1,
    },
    576 : {
      items: 3,
    },
  },
  center: true,
  mergeFit: false,
  dots: false,
})