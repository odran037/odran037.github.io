const getRandomCharacter = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generate = (limit, min, max) => {

  let charactersList = [];

  do {
    charactersList.push(String.fromCharCode(getRandomCharacter(min, max)));
  } while (--limit);

  return charactersList.join('');

};


setInterval(function() {

  let initial = document.querySelector('#n').getAttribute('data-initial');
  let len = initial.length;

  for (let i = 0; i < 100; i++) {
    setTimeout(() => document.querySelector('#n').innerText = generate(len, 48, 57), i * 10);
  }

  setTimeout(() => document.querySelector('#n').innerText = initial, 1000);

}, 5000);

document.querySelectorAll('.link').forEach(function(e) {

  e.addEventListener('mouseenter', () => {

    let initial = e.getAttribute('data-initial');
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
