const btn_scrool_to_up = document.querySelector(".btn-scrool-to-up");
console.log(btn_scrool_to_up.style.display);

const scrool = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn_scrool_to_up.style.display = "block";
    btn_scrool_to_up.style.opacity = "1";
  } else {
    btn_scrool_to_up.style.display = "none";
    btn_scrool_to_up.style.opacity = "0";
  }
};
window.onscroll = () => scrool();
