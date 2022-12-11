const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

const arrayOfCategories = document.querySelectorAll(".item");

arrayOfCategories.forEach(function (element, index) {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
