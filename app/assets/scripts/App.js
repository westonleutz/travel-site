import '../styles/styles.css'
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"
import Modal from "./modules/Modal"

if (module.hot) {
  module.hot.accept()
}

/* Lesson code */
new Modal()

let mobileMenu = new MobileMenu()
let stickyHeader = new StickyHeader()

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
