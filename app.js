const sidemenu = document.querySelector("#sidemenu");
const closeMenu = document.querySelector("#close-menu");
const openMenu = document.querySelector("#open-menu");
const msg = document.querySelector("#msg");

openMenu.addEventListener("click", open);
closeMenu.addEventListener("click", close);

function open() {
  sidemenu.style.right = "0";
  openMenu.style.display = "none";
}

function close() {
  sidemenu.style.right = "-200px";
  openMenu.style.display = "block";
}

/***** Contact form submit****/
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxX_Xnrji4lc_IcwU6CbzzcUa0Hg6sgcfdSPCJ75mu4cwht32MSh4KSUvLsXleGTOgwyg/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerText = "Message sent succesfully!";
      setTimeout(() => {
        msg.innerText = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerText = "Error, message not sent :(";
      setTimeout(() => {
        msg.innerText = "";
      }, 5000);
      form.reset();
    });
});
