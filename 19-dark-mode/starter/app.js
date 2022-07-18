const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = moment(date).format("MMMM do, YYYY");

    return `<articles class="post">
        <h2>${title}</h2>
        <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} read time</span>
        </div>
        <p>${snippet}</p>
        </articles>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;

// console.log(moment);
