//TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.

//const link = document.querySelector('a')!;
//console.log(link.href); //[ERROR] 11:02:34 ReferenceError: document is not defined


// const form = document.getElementById('signup');
// console.log(form.method);
// ERROR: Object is possibly 'null'.
// ERROR: Property 'method' does not exist on type 'HTMLElement'.


// Select the HTML elements
const title = document.getElementById("title") as HTMLHeadingElement;
const button = document.getElementById("changeText") as HTMLButtonElement;

// Add an event listener to the button
button.addEventListener("click", () => {
  if (title) {
    title.textContent = "Text changed by TypeScript!";
  }
});

