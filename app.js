import { sampleAPIResponse as data } from "./sampleData.js";
const gallery = document.querySelector("ul.gallery");
const featuredIframe = document.querySelector("div.embed iframe");
const featuredTitle = document.querySelector("div.feature h1");
const featuredDescrition = document.querySelector("div.feature p");

function loadFeature(id) {
  const ref = data.items[id].snippet;
  featuredTitle.textContent = ref.title;
  featuredDescrition.textContent = ref.description;

  featuredIframe.src = `https://www.youtube.com/embed/${data.items[id].id.videoId}`;
}

function loadGalleryContent() {
  data.items.map(({ snippet, id }, idx) => {
    if (idx === 0) return;
    const li = document.createElement("li");
    li.innerHTML = `
    <a class="video" data-id=${idx}>
        <img src="${snippet.thumbnails.default.url}" alt="" />
        <h3>${snippet.title}</h3>
    </a>`;

    li.lastChild.addEventListener("click", (e) => {
      loadFeature(e.target.parentNode.dataset.id);
    });

    gallery.append(li);
  });
}

window.addEventListener("load", () => {
  loadFeature(0);
  loadGalleryContent();
});
