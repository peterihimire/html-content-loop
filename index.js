console.log("Hello lets go!");

let data = [
  { id: "1", name: "Peter", age: "32" },
  { id: "2", name: "Beatrice", age: "72" },
  { id: "3", name: "Isimeme", age: "42" },
  { id: "4", name: "Maria", age: "37" },
];

let posts = [
  {
    id: "1",
    category: "Uncategorized",
    date: "06 Dec. 2022",
    title:
      "Prof. Maitafsir vows to ensure quality aand commitment in training of Teachers",
    excerpts: "sen. Kaka mallam Yale, chairman NTI governing counsil",
    link: "https://omniswift.com",
  },
  {
    id: "2",
    category: "Uncategorized",
    date: "06 Dec. 2022",
    title:
      "Prof. Maitafsir vows to ensure quality aand commitment in training of Teachers",
    excerpts: "sen. Kaka mallam Yale, chairman NTI governing counsil",
    link: "https://omniswift.com",
  },
  {
    id: "3",
    category: "Uncategorized",
    date: "06 Dec. 2022",
    title:
      "Prof. Maitafsir vows to ensure quality aand commitment in training of Teachers",
    excerpts: "sen. Kaka mallam Yale, chairman NTI governing counsil",
    link: "https://omniswift.com",
  },
  {
    id: "4",
    category: "Uncategorized",
    date: "06 Dec. 2022",
    title:
      "Prof. Maitafsir vows to ensure quality aand commitment in training of Teachers",
    excerpts: "sen. Kaka mallam Yale, chairman NTI governing counsil",
    link: "https://omniswift.com",
  },
];


// FOR THE POST WITH INNER-HTML [prone to (XSS) Xross Site Scripting - Hackers can use it to steal private user info stored in session cookies.]
const show = (data) => {
  console.log(data);
  let singleArticle = ``;
  for (let item of data) {
    // console.log(item)
    singleArticle += `
  <div class="article-5-2">
    <div class="flex-category">
      <h2>${item.category}</h2> <h3>${item.date}</h3>
    </div>
    <h1>
      ${item.title}
    </h1>
    <p>
      ${item.excerpts}
    </p>
    <a href=${item.link} target="_blank">
      Read more
    </a>
  </div>
`;
  }

  document.getElementById("item-grid").innerHTML = singleArticle;
};
show(posts);


// FOR THE POST WITH APPEND-CHILD
const postList = document.querySelector(".post-grid");

posts.forEach((post) => {
  // console.log(post)
  const postEl = document.createElement("div");
  const categoryDate = document.createElement("div");
  postEl.className = "article-5-2";
  categoryDate.className = "flex-category";

  const title = document.createElement("h1");
  const subTitle = document.createElement("p");
  const category = document.createElement("h2");
  const date = document.createElement("h3");
  const link = document.createElement("a");

  title.innerText = post.title;
  subTitle.innerText = post.excerpts;
  category.innerText = post.category;
  date.innerText = post.date;
  link.innerText = "Read more";
  link.href = post.link;

  postList.appendChild(postEl);
  postEl.appendChild(categoryDate);
  postEl.appendChild(title);
  postEl.appendChild(subTitle);
  categoryDate.appendChild(category);
  categoryDate.appendChild(date);
  postEl.appendChild(link);
});


// // FOR TESTING
// const list = document.querySelector('#projects')

// data.forEach(item => {
//   // console.log(item)
//   const projectEl = document.createElement('div')
//   projectEl.className = 'card'
//   // const  div  =  document.querySelector("div#main-container")
// 	// const  image  =  document.createElement("img")
// 	// image.src  = "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1082B/production/_87472676_thinkstockphotos-502314190.jpg"
// 	// const  btn  =  document.createElement("button")
// 	// btn.addEventListener("click", () =>  console.log("hello"))
// 	// btn.innerText  =  "Test Button"
// const title = document.createElement('h5')
// const subTitle = document.createElement('p')
// title.innerText = item.name
// subTitle.innerText = item.age
// subTitle.className = 'color-size'
//   list.appendChild(projectEl)
//   projectEl.appendChild(title)
//   projectEl.appendChild(subTitle)
// })