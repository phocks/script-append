/**
 * Appends a script tag to a page, thus loading it dynamically
 * @param {string} scriptUrl - source location of the .js script
 */
const main = (scriptUrl) => {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("src", scriptUrl);
  document.head.appendChild(scriptTag);
};

export default main;
