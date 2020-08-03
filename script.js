const freqC = (freq, c) => {
  for (var i = 0; i < 2; i++) {
    freq[i].innerHTML = c
  }
}

var button1 = document.getElementById("option1")
button1.addEventListener("click", (e) => {
  var x = document.getElementById("price1")
  x.innerHTML = "$0"
  var y = document.getElementById("price2")
  y.innerHTML = "$99"
  var freq = document.getElementsByClassName("freq")
  freqC(freq, "/month")
})

var button2 = document.getElementById("option2")
button2.addEventListener("click", (e) => {
  var x = document.getElementById("price1")
  x.innerHTML = "$50"
  var y = document.getElementById("price2")
  y.innerHTML = "$299"
  var freq = document.getElementsByClassName("freq")
  freqC(freq, "/year")
})

var count = 0
var profile = [
  {
    id: 0,
    name: "Zoltan Nemeth",
    post: "CEO of Pixer Lab",
    src: "img/profile1.png",
  },
  {
    id: 1,
    name: "John Doe",
    post: "CTO of Pixer Lab",
    src: "img/profile2.png",
  },
  {
    id: 2,
    name: "Tim Smith",
    post: "COO of Pixer Lab",
    src: "img/profile3.png",
  },
]

var name = document.getElementById("name")
var pic = document.getElementById("pic")
var post = document.getElementById("post")

const updateProfile = (count) => {
  for (var i = 0; i < 3; i++) {
    if (profile[i].id === count) {
      name.innerHTML = profile[i].name
      post.innerHTML = profile[i].post
      pic.src = profile[i].src
    }
  }
}

// arrow = document.getElementsByClassName("arrow")
left = document.getElementById("left")
right = document.getElementById("right")

left.addEventListener("click", (e) => {
  console.log(count)
  if (count > 0) {
    count--
    updateProfile(count)
    right.disabled = false
    right.classList.add("arrow")
    right.classList.remove("off")
  }
  if (count === 0) {
    left.disabled = true
    left.classList.add("off")
    left.classList.remove("arrow")
  }
})

right.addEventListener("click", (e) => {
  console.log(count)
  if (count < 2) {
    count++
    updateProfile(count)
    left.disabled = false
    left.classList.add("arrow")
    left.classList.remove("off")
  }
  if (count === 2) {
    right.disabled = true
    right.classList.add("off")
    right.classList.remove("arrow")
  }
})

var acc = document.getElementsByClassName("accordion")
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeF")
    var panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}
