function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

var sites = [
  "http://guardian.theater/",
  "http://trials.report/",
  "http://destinytracker.com/",
  "http://guardian.gg/",
  "http://wastedondestiny.com/"
]

shuffle(sites);

if (document.getElementById('random')) {
  var randomLink = document.getElementById('random');
  randomLink.href = sites[0];
  randomLink.addEventListener('click', function() {
    console.log(randomLink.href)
    console.log(sites[0])
    while (sites[0] == randomLink.href) {
      shuffle(sites);
      console.log('shuffled: ' + sites[0])
    }
    randomLink.href = sites[0];
  });
}

if (document.getElementById('siteList')) {
  var siteList = document.getElementById('siteList');
  sites.forEach(function(site) {
    siteList.innerHTML += "<li><a href='" + site + "'>" + site + "</a></li>"
  });
}