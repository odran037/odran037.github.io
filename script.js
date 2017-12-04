window.addEventListener('click', () => window.location.reload());

const body = document.body;
const div = document.createElement('div');
const h1 = document.createElement('h1');
const h1Text = document.createTextNode('odran');
const small = document.createElement('small');
const smallText = document.createTextNode('037');
const br = document.createElement('br');
const p = document.createElement('p');
const pText = document.createTextNode('53662736772837');
const links = [
  { title: 'github', url: 'https://github.com/odran037' },
  { title: 'codepen', url: 'https://codepen.io/odran037' },
  { title: 'glitch', url: 'https://glitch.com/@odran037' },
];
const a = links.map((link) => {
  let tag = document.createElement('a');
  let tagText = document.createTextNode(link.title);

  tag.appendChild(tagText);
  tag.href = link.url;
  tag.target = '_blank';

  return tag;
});

h1.appendChild(h1Text);
small.appendChild(smallText);
h1.appendChild(small);
p.appendChild(pText);
div.appendChild(h1);
div.appendChild(br);
div.appendChild(p);
a.forEach((link) => div.appendChild(link) );
body.appendChild(div);


const getRandomCharacter = (min, max) => {

  return Math.floor(Math.random() * (max - min + 1)) + min;

}


const generate = (limit, min, max) => {

  let charactersList = [];

  do {
    charactersList.push(String.fromCharCode(getRandomCharacter(min, max)));
  } while (--limit);

  return charactersList.join('');

}


setInterval(() => {

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      document.querySelector('p').innerText = generate(14, 48, 57);
    }, i * 10);
  }

  setTimeout(() => {
    document.querySelector('p').innerText = '53662736772837';
  }, 1000);

}, 5000);


document.querySelectorAll('a').forEach((e) => {

  e.addEventListener('mouseenter', () => {

    let initial = e.innerText;
    let len = initial.length;

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        e.innerText = generate(len, 97, 122);
      }, i * 10);
    }

    setTimeout(() => {
      e.innerText = initial;
    }, 100);

  });

});
