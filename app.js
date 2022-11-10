const content = [
  {
    image: "dave-hoefler-okUIdo6NxGo-unsplash.jpg",
    caption: "Photo by Dave Hoefler on Unsplash",
  },
  {
    image: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
    caption: "Photo by Sherman Yang n Unsplash",
  },
  {
    image: "jakob-owens-EwRM05V0VSI-unsplash.jpg",
    caption: "Photo by Jakob Owens on Unsplash",
  },
  {
    image: "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
    caption: "Photo by Dan Grinwis on Unsplash",
  },
  {
    image: "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
    caption: "Photo by Vincentiu Solomon on Unsplash",
  },
  {
    image: "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
    caption: "Photo by Silas Baisch on Unsplash",
  },
  {
    image: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
    caption: "Photo by Eugene Golovesov on Unsplash",
  },
  {
    image: "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
    caption: "Photo by Jennifer reynolds on Unsplash",
  },
  {
    image: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
    caption: "Photo by Kellen Riggin on Unsplash",
  },
  {
    image: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
    caption: "Photo by Rafael Hoyos on Unsplash",
  },
  {
    image: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
    caption: "Photo by Sonya Romanovska on Unsplash",
  },
];

const template = ``;

const thumbnailContainer = document.querySelector(".thumbnails ul");
const thumbnails = document.querySelectorAll(".thumbnails ul ");
const feature = document.querySelector("div.feature");

const next = document.querySelector(".right");
const previous = document.querySelector(".left");

let selected = 0;
let prevSelected;

const previousImage = () => {
  if (selected == 0) return;
  cleanSelected();
  selected -= 1;
  addSelected();
  renderFeature(selected);
};

const nextImage = () => {
  if (selected == content.length - 1) return;
  cleanSelected();
  selected += 1;
  addSelected();
  renderFeature(selected);
};

// Render feature selected image
const renderFeature = (selected) => {
  feature.innerHTML = ` 
  <img src="images/${content[selected].image}" alt="${content[selected].caption}" />
      <div class="caption">${content[selected].caption}</div>`;
  scrollIntro();
};

// add class selected
const addSelected = () => {
  thumbnailContainer.childNodes[selected].classList.add("selected");
};

// remove class selected
const cleanSelected = () => {
  prevSelected = thumbnailContainer.childNodes[selected];
  prevSelected.classList.remove("selected");
};

// scroll el intro view
const scrollIntro = () => {
  document.querySelector(".selected").scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
};

// E.L
next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    prevSelected = thumbnailContainer.childNodes[selected];
    prevSelected.classList.remove("selected");
    selected = e.target.dataset.item;
    thumbnailContainer.childNodes[selected].classList.add("selected");

    renderFeature(selected);
  });
});

window.addEventListener("load", () => {
  content.forEach((item, idx) => {
    const el = document.createElement("li");
    el.classList = idx === 0 ? "selected" : "";

    el.innerHTML = `<a href="#">
          <img src=./images/${item.image} alt="" data-item=${idx}>
        </a>
      `;
    thumbnailContainer.appendChild(el);
  });
  prevSelected = thumbnailContainer.childNodes[selected];
  renderFeature(selected);
});
