const open = document.getElementById("open")
const close = document.getElementById("close")
const container = document.querySelector(".container")

open.addEventListener("click", () => container.classList.add("show-nav"))

close.addEventListener("click", () => container.classList.remove("show-nav"))

/* Day 2 */

const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle_prog")


let current_active = 2

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