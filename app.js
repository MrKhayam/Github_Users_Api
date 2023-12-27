let api = "https://api.github.com/users";

let getData = async () => {
  let data = await fetch(api);
  let response = await data.json();
  return response;
};

getData().then((i) => {
  i.forEach((user) => {
    let container = document.querySelector(".container");
    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);
    let image = document.createElement("div");
    image.classList.add("image");
    card.appendChild(image);
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = user.avatar_url;
    image.appendChild(img);
    let name = document.createElement("h2");
    name.classList.add("userName");
    let loginName = user.login.toUpperCase();
    name.textContent = loginName;
    card.appendChild(name);
  });
});
