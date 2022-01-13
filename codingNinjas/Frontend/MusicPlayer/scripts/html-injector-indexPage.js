// Uses HTML templates defined in 'html-templates.js' to inject in HTML code of document.
const headerElement = document.getElementsByTagName('header');
console.log(headerElement);
headerElement[0].innerHTML += headerTemplateCode;