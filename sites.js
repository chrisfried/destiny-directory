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
  {
    name: "Guardian Theater",
    url: "https://guardian.theater/"
  },
  {
    name: "Trials Report",
    url: "https://trials.report/"
  },
  {
    name: "Destiny Tracker",
    url: "https://destinytracker.com/"
  },
  {
    name: "Guardian.gg",
    url: "https://guardian.gg/"
  },
  {
    name: "Time Wasted on Destiny",
    url: "http://wastedondestiny.com/",
    blank: true
  },
  {
    name: "Destiny Item Manager",
    url: "https://www.reddit.com/r/destinyitemmanager/",
    blank: true
  },
  {
    name: "Destiny Reddit",
    url: "https://www.reddit.com/r/destinythegame/",
    blank: true
  },
  {
    name: "Low Sodium Destiny",
    url: "https://www.reddit.com/r/LowSodiumDestiny/",
    blank: true
  }
]

shuffle(sites);

if (document.getElementById('random')) {
  var randomLink = document.getElementById('random');
  randomLink.href = sites[0];
  randomLink.addEventListener('click', function() {
    console.log(randomLink.href)
    console.log(sites[0].url)
    while (sites[0].url == randomLink.href) {
      shuffle(sites);
      console.log('shuffled: ' + sites[0].url)
    }
    randomLink.href = sites[0].url;
    if (sites[0].blank) {
      randomLink.setAttribute('target', '_blank');
    } else {
      randomLink.setAttribute('target', 'content');
    }
  });
}

if (document.getElementById('siteList')) {
  var siteList = document.getElementById('siteList');
  sites.forEach(function(site) {
    if (site.blank)
      siteList.innerHTML += "<li><a href='" + site.url + "' target='_blank'>" + site.name + "</a></li>"
    else
      siteList.innerHTML += "<li><a href='" + site.url + "'>" + site.name + "</a></li>"
  });
}