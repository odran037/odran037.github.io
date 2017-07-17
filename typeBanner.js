var banner = '\n           _                  ___ ____ ______ _\n          | |                / _ \\___ \\____  (_)\n  ___   __| |_ __ __ _ _ __ | | | |__) |  / / _  ___\n / _ \\ / _` | \'__/ _` | \'_ \\| | | |__ <  / / | |/ _ \\\n| (_) | (_| | | | (_| | | | | |_| |__) |/ / _| | (_) |\n \\___/ \\__,_|_|  \\__,_|_| |_|\\___/____//_/ (_)_|\\___/\n\n\n';
var rant = ['\n\n\nI was born a dreamer.',
            '\nA wad of cookie dough.',
            '\n\nToday I am a man of action.',
            '\nCarved out of wood.\n\n\n',
            '<a href="https://github.com/odran037/contact-me"><i class="fa fa-paper-plane"></i></a>'];

function typeOut(c, t, el) {
  setTimeout(function() {
    t < 320 ? 
    document.getElementById(el).innerText += c:
    document.getElementById(el).innerHTML += c;
  }, t * 50);
}

function start() {
  var j = 0;
  for (var i = 0; i < banner.length + rant.length; i++) {
    if (i < banner.length) {
      typeOut(banner[i], i, 'banner-type');
    } else {
      typeOut(rant[j], i, 'rant');
      j++;
    }
  }
}