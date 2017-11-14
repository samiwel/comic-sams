const tags = ["body", "p", "span", "h1", "h2", "h3", "h4"];

for (let tag of tags) {
  const elems = document.getElementsByTagName(tag);
  for(let elem of elems) {
    elem.style.fontFamily = "Comic Sans MS, sans-serif";
  }
}
