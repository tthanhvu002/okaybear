const headerMbBtn = document.querySelector(".header-mobile-bars");

headerMbBtn.onclick = () => {
  document.querySelector(".header-mobile").classList.add("active");
};



Array.from(document.querySelectorAll(".header-nav li")).map(item => {
    item.onclick = () => {
        item.querySelector('.coming-soon').classList.toggle('active')
    }
})
