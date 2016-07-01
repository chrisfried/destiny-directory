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
    name: "Secret Scrubland 31430",
    url: "https://secret-scrubland-31430.herokuapp.com/"
  },
  {
    name: "DestinyLFG.Net",
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
    name: "Destiny Fashion",
    url: "https://www.reddit.com/r/DestinyFashion",
    blank: true
  },
  {
    name: "Destiny Journals",
    url: "https://www.reddit.com/r/DestinyJournals/",
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
  },
  {
    name: "Destiny Scopes",
    url: "http://destinyscopes.com/"
  },
  {
    name: "Destiny Lore",
    url: "https://www.reddit.com/r/DestinyLore/",
    blank: true
  },
  {
    name: "Raid Secrets",
    url: "https://www.reddit.com/r/raidsecrets/",
    blank: true
  },
  {
    name: "Destiny Public Events",
    url: "http://destinypublicevents.com/"
  },
  {
    name: "Destiny Ghost Hunter",
    url: "http://destinyghosthunter.net/"
  },
  {
    name: "Destiny Chest Hunter",
    url: "http://destinychesthunter.net/"
  },
  {
    name: "Destinypedia",
    url: "http://www.destinypedia.com/"
  },
  {
    name: "Destiny Wiki",
    url: "http://destiny.wikia.com/wiki/Destiny_Wiki/"
  },
  {
    name: "Bungie.net",
    url: "https://www.bungie.net/",
    blank: true
  },
  {
    name: "Destiny Status",
    url: "http://destinystatus.com/"
  },
  {
    name: "Destiny Checklist",
    url: "https://www.destinychecklist.net/"
  },
  {
    name: "Destiny Calcified Fragments",
    url: "http://destinycalcifiedfragments.com/"
  },
  {
    name: "Dinklebot.net",
    url: "http://dinklebot.net/"
  },
  {
    name: "Guardian.fm",
    url: "https://guardian.fm/",
    blank: true
  },
  {
    name: "Destiny Exotics",
    url: "https://destinyexotics.com/"
  },
  {
    name: "Ishtar Commander",
    url: "http://ishtar-commander.com/"
  },
  {
    name: "Loadouts for Destiny",
    url: "http://www.loadoutsapp.com/"
  },
  {
    name: "Destiny Infusion + Light Level Calculator",
    url: "http://mattaltepeter.com/destiny/"
  },
  {
    name: "DestinyLFG.com",
    url: "http://www.destinylfg.com/",
    blank: true
  },
  {
    name: "Destiny Tailor",
    url: "http://destinytailor.com/"
  },
  {
    name: "Destiny Reputation Calculator",
    url: "http://destiny.neonblack.moe/reputation/"
  },
  {
    name: "Destiny Daily",
    url: "http://www.destiny-daily.com/"
  },
  {
    name: "Iron Banner Reputation Calculator",
    url: "http://www.ironbanner.info/"
  },
  {
    name: "Destiny Timeline",
    url: "http://destinytimeline.com/",
    blank: true
  },
  {
    name: "Ishtar Collective",
    url: "http://www.ishtar-collective.net/",
    blank: true
  },
  {
    name: "Destiny Clan Wars",
    url: "http://destinyclanwars.com/"
  },
  {
    name: "Destiny Portal",
    url: "http://destiny-portal.com/"
  },
  {
    name: "Destiny Coach",
    url: "http://guardian.coach/",
    blank: true
  },
  {
    name: "Destiny STL Generator",
    url: "http://www.destinystlgenerator.com/"
  },
  {
    name: "Destiny WTF?!",
    url: "http://destiny.wtf/"
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
