const reactElement = {
  type: "a",
  props: {
    // attributes
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit the google",
};

function createElement(element) {
  const tag = document.createElement(element.type);

  // Object.keys(element.props).map((prop) => {
  //   tag.setAttribute(prop, element.props[prop]);
  // });

  // or

  for (const prop in element.props) {
    tag.setAttribute(prop, element.props[prop]);
  }

  tag.innerHTML = element.children;
  return tag;
}

const root = document.getElementById("root");
root.append(createElement(reactElement));
