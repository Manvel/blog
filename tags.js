const path = require("path");
const {promisify} = require("util");
const glob = promisify(require("glob").glob);
const fs = require("fs");
const {writeFileSync, existsSync, mkdirSync} = fs;
const readFile = promisify(fs.readFile);
const frontMatter = require("front-matter");

const fileContent = `---
layout: tags
---
`;

function getTags()
{
  return glob(`pages/**/*.*`).then((pages) =>
  {
    return pages.map((page) =>
    {
      return readFile(page, "utf-8").then((data) => frontMatter(data).attributes);
    })
  }).then((pages) => Promise.all(pages)).then((pages) =>
  {
    return pages.reduce((acc, {tags}) =>
    {
      if (tags)
      {
        tags.forEach((tag) =>
        {
          if (acc.indexOf(tag) == -1)
            acc.push(tag);
        })
      }
      return acc;
    }, []);
  });
}

const createTags = () =>
{
  getTags().then((tags) =>
  {
    if (!tags.length)
      return;
  
    const tagDir = path.join("pages", "tag");
    if (!existsSync(tagDir))
      mkdirSync(tagDir);
    tags.forEach((tag) =>
    {
      const file = path.join(tagDir, tag.toLowerCase() + ".md");
      if (!existsSync(file))
        writeFileSync(file, fileContent);
    });
  });
};

module.exports = {createTags};
