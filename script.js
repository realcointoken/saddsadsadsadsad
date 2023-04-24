const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.isIntersecting)
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")

        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

anime({
    targets: '#askus path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 200 },
    direction: 'alternate',
    loop: true
  });