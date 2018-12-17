
const authors = {
  "saroyanm": {
    "name": "Manvel Saroyan",
    "avatar": "images/authors/manvel.png",
    "social": [
      {
        "name": "github",
        "image": "images/social/github.svg",
        "path": "https://github.com/Manvel"
      },
      {
        "name": "linkedin",
        "image": "images/social/linkedin.svg",
        "path": "https://www.linkedin.com/in/saroyanm"
      },
      {
        "name": "twitter",
        "image": "images/social/twitter.svg",
        "path": "https://twitter.com/saroyanm"
      }
    ]
  }
};

const shareButtons = [
  {
    "name": "facebook",
    "image": "images/social/facebook.svg",
    "path": "https://www.facebook.com/sharer/sharer.php?u="
  },
  {
    "name": "twitter",
    "image": "images/social/twitter.svg",
    "path": "https://twitter.com/home?status="
  },
  {
    "name": "Google Plus",
    "image": "images/social/gplus.svg",
    "path": "https://plus.google.com/share?url="
  }
];

const domain = "https://manvel.github.io/blog/";

const templateData = {
  authors, shareButtons, domain
};

module.exports = {templateData};
