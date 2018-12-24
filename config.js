const domain = "https://manvel.me/";
const favicon = "/images/favicon.png";
const image = "/images/manvel.png";
const title = "Manvel";
const description = "I wite here about stuff I do.";
const tags = ["extension", "JavaScript", "NodeJS"];

const authors = {
  "saroyanm": {
    "name": "Manvel Saroyan",
    "avatar": "/images/authors/manvel.png",
    "twitter": "@saroyanm",
    "social": [
      {
        "name": "github",
        "image": "/images/social/github.svg",
        "path": "https://github.com/Manvel"
      },
      {
        "name": "linkedin",
        "image": "/images/social/linkedin.svg",
        "path": "https://www.linkedin.com/in/saroyanm"
      },
      {
        "name": "twitter",
        "image": "/images/social/twitter.svg",
        "path": "https://twitter.com/saroyanm"
      }
    ]
  }
};

const shareButtons = [
  {
    "name": "facebook",
    "image": "/images/social/facebook.svg",
    "path": "https://www.facebook.com/sharer/sharer.php?u="
  },
  {
    "name": "twitter",
    "image": "/images/social/twitter.svg",
    "path": "https://twitter.com/home?status="
  },
  {
    "name": "Google Plus",
    "image": "/images/social/gplus.svg",
    "path": "https://plus.google.com/share?url="
  }
];

const navigations = [
  {
    "name": "Blog",
    "path": "/"
  },
  {
    "name": "Projects",
    "path": "/projects"
  },
  {
    "name": "About",
    "path": "/about"
  }
];

require("./tags").createTags(tags);

const templateData = {
  site: {
    authors, shareButtons, domain, navigations, favicon, image, title, description
  }
};

module.exports = {templateData};
