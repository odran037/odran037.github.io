var body = document.body;
var div = document.createElement('div');
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('odran');
var small = document.createElement('small');
var smallText = document.createTextNode('037');
var br = document.createElement('br');
var p = document.createElement('p');
var pText = document.createTextNode('53662736772837');
var links = [
  { title: 'github', url: 'https://github.com/odran037'},
  { title: 'codepen', url: 'https://codepen.io/odran037'},
  { title: 'glitch', url: 'https://odran037.glitch.me'}
];
var a = links.map(function(link) {
  var tag = document.createElement('a');
  var tagText = document.createTextNode(link.title);
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
a.forEach(function(link) {
  div.appendChild(link);
});
body.appendChild(div);

function getRandomCharacter(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate(limit, min, max) {
  var charactersList = [];

  do {
    charactersList.push(String.fromCharCode(getRandomCharacter(min, max)));
  } while (--limit);

  return charactersList.join('');
}

setInterval(function() {
  for (let i = 0; i < 100; i++) {
    setTimeout(function() {
      document.querySelector('p').innerText = generate(14, 48, 57);
    }, i * 10);
  }

  setTimeout(function() {
    document.querySelector('p').innerText = '53662736772837';
  }, 1000);
}, 5000);

document.querySelectorAll('a').forEach(function(e) {
  e.addEventListener('mouseenter', function() {
    var initial = this.innerText;
    var len = initial.length;

    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        e.innerText = generate(len, 97, 122);
      }, i * 10);
    }

    setTimeout(function() {
      e.innerText = initial;
    }, 100);
  });
});