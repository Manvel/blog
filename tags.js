const path = require("path");
const {writeFileSync, existsSync, mkdirSync} = require("fs");

const frontMatter = `---
layout: tags
---
`;


const createTags = (tags) =>
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
      writeFileSync(file, frontMatter);
  });
};

module.exports = {createTags};
