const getRandomCharacter = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generate = (limit, min, max) => {

  let charactersList = [];

  do {
    charactersList.push(String.fromCharCode(getRandomCharacter(min, max)));
  } while (--limit);

  return charactersList.join('');

};


setInterval(() => {

  for (let i = 0; i < 100; i++) {
    setTimeout(() => document.querySelector('p').innerText = generate(14, 48, 57), i * 10);
  }

  setTimeout(() => document.querySelector('p').innerText = '53662736772837', 1000);

}, 5000);

document.querySelectorAll('.link').forEach((e) => {

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
window.addEventListener('click', () => window.location.reload());
