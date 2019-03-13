function helloWorldElement() {
  let element = document.createElement('span');
  element.innerHTML = 'Hello World!';
  return element.outerHTML;
}

document.getElementById('root').innerHTML = helloWorldElement();
