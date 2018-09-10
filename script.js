window.onload = (icon) => {
  let titleIcon = document.getElementById('title-icon');
  let titleAlt = document.getElementById('title-alt');
  let icons = ['github', 'gitlab', 'bitbucket'];
  let host = window.location.hostname;

  icons.forEach((icon) => {
    if (host.includes(icon)) {
      titleIcon.className = `fa fa-${icon}`;
    } else {
      titleIcon.textContent = 'localhost';
      titleAlt.insertAdjacentHTML('beforeend', `<a href="https://odran037.${icon}.io"><i class="text-dark fa fa-${icon}"></i></a>`);
    }
  });
}

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
    setTimeout(() => {
      let gen = generate(len, 48, 57);
      document.querySelector('#n').innerText = gen;
      document.title = gen;
    }, i * 10);
  }

  setTimeout(() => {
    document.querySelector('#n').innerText = initial;
    document.title = initial;
  }, 1000);

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
