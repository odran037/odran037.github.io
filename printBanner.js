var banner = '\n           _                  ___ ____ ______ _\n          | |                / _ \\___ \\____  (_)\n  ___   __| |_ __ __ _ _ __ | | | |__) |  / / _  ___\n / _ \\ / _` | \'__/ _` | \'_ \\| | | |__ <  / / | |/ _ \\\n| (_) | (_| | | | (_| | | | | |_| |__) |/ / _| | (_) |\n \\___/ \\__,_|_|  \\__,_|_| |_|\\___/____//_/ (_)_|\\___/\n\n\n';

function print(c, t) {
  setTimeout(function() {
    document.getElementById('banner-print').innerText += c;
  }, t * 50);
}

function start() {
  for (var i = 0; i < banner.length; i++) {
    print(banner[i], i);
  }
}
