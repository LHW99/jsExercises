let main = document.getElementById('#main')

const page = document.createElement('p');
page.classList.add('redPage');
pNode = document.createTextNode(`Hey I'm red!`);
redPage.setAttribute('style', 'color: red');
page.appendChild(pNode);

main.insertBefore(page, pNode);

const head3 = document.createElement('h3');
head3.classList.add('blueHead');
head3.textContent = `I'm a blue h3!`;
blueHead.setAttribute('style', 'color: blue');

const box = document.createElement('div');
box.classList.add('container');
container.setAttribute('style', 'background-color: pink; border-color: black; border-width: medium');
