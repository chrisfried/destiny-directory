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
    url: "http://destinytracker.com/"
  },
  {
    name: "Guardian.gg",
    url: "http://guardian.gg/"
  },
  {
    name: "Time Wasted on Destiny",
    url: "http://wastedondestiny.com/"
  },
  {
    name: "Destiny Calendar Heatmap",
    url: "https://secret-scrubland-31430.herokuapp.com/"
  },
  {
    name: "LFG.net",
    url: "http://www.destinylfg.net/"
  },
  {
    name: "Planet Destiny",
    url: "http://planetdestiny.com/"
  },
  {
    name: "DestinyDB",
    url: "https://www.destinydb.com/"
  },
  {
    name: "Destiny Item Manager",
    url: "http://destinyitemmanager.com/",
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
  },
  {
    name: "Fireteams",
    url: "https://www.reddit.com/r/fireteams",
    blank: true
  },
  {
    name: "Crucible Playbook",
    url: "https://www.reddit.com/r/crucibleplaybook",
    blank: true
  },
  {
    name: "Crucible Sherpas",
    url: "https://www.reddit.com/r/CrucibleSherpa/",
    blank: true
  },
  {
    name: "Destiny Sherpas",
    url: "https://www.reddit.com/r/destinysherpa/",
    blank: true
  },
  {
    name: "The 100",
    url: "https://www.the100.io/",
    blank: true
  }
]

shuffle(sites);

if (document.getElementById('random')) {
  var randomLink = document.getElementById('random');
  randomLink.href = sites[0].url;
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