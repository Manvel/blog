const domain = "https://manvel.me/";
const favicon = "/images/favicon.png";
const image = "/images/manvel.png";
const title = "Manvel";
const description = "I wite here about stuff I do.";
const tags = ["extension", "JavaScript", "NodeJS", "ssg", "i18n", "l10n"];

const authors = {
  "saroyanm": {
    "name": "Manvel Saroyan",
    "avatar": "/images/authors/manvel.png",
    "twitter": "@saroyanm",
    "about": "/about",
    "url": "https://manvel.me/about",
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
  },
  "default": "saroyanm"
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
    "image": "/images/social/linkedin.svg",
    "path": "https://www.linkedin.com/shareArticle?url="
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

const {getLanguage, highlight} = require("highlight.js");
const markdownLink = require("markdown-it-link-attributes");

// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {
  highlight: (str, lang) => (lang && getLanguage(lang)) ? highlight(lang, str).value : "",
  plugins: [
    [
      markdownLink, {
        pattern: /^https?:\/\//,
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      }
    ]
  ]
};

require("./tags").createTags(tags);
const {draft} = require("minimist")(process.argv.slice(2));

const templateData = {
  site: {
    authors, shareButtons, domain, navigations, favicon, image, title,
    description, draft
  }
};

module.exports = {templateData, markdownOptions};
