// to blur the website when called.
const load_text = document.querySelector(".loading-text")
const blur = document.querySelector(".blur")

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    load_text.innerText = `${load}%`
    load_text.style.opacity = scale(load, 0, 100, 1, 0)
    blur.style.filter = `blur(${scale(load, 0, 100,30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/* Day 4 */
const search = document.querySelector(".search")
const btn = document.querySelector(".btn_search")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
})

/* Day 2 */

const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")


let current_active = 1

next.addEventListener("click", () => {
    current_active++

    if (current_active > circles.length) {
        current_active = circles.length
    }

    update()
})

prev.addEventListener("click", () => {
    current_active--

    if (current_active < 1) {
        current_active = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < current_active) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"

    if (current_active === 1) {
        prev.disabled = true
    } else if (current_active === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}