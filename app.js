// JAvascript Code******//

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World From Js";
// const root = document.getElementById("root");
// root.appendChild(heading);

// react code to create hello world//
/**
 *
 *
 *
 *
 *
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "iam an h1 tag"),
    React.createElement("h2", {}, "iam an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam an h1 tag"),
    React.createElement("h2", {}, "iam an h2 tag"),
  ]),
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", {}, "iam an h1 tag"),
    React.createElement("h2", {}, "iam an h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React✈️🙏"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
