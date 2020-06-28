# hugohermanwilson.com
Redoing hugohermanwilson.com using Netlify and GatsbyJS

Made using Node v14.3.0, npm 6.14.5

# Getting Started:

1) Run `npm install`
3) Run `gatsby develop` to launch the project on port 8000


# Notes for Hugo

Data in the Biography, Events, Gallery, and Listen pages is pulled in from markdown files.

## How to style text in markdown (that'll be converted to HTML)

[Look at this markdown cheat-sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

To bold text do this : `** I'm bold**` => **I'm bold**

To italicise text do this : `__I'm italic__` => __I'm italic__

## Adding to the Events page

Markdown files found at: `src/pages/YYYY-MM-DD-event/index.md`. Should contain frontmatter and then some markdown content like this:

```markdown
---
name: Shower Singing
date: "2020-06-21T23:50:00"
venue: The Bathroom
url: ""
---

I'm _really_ looking forward to the acoustics in the venue.

```

The `url` value should be a link off to a page describing the event. The event name will be made into a link if a URL is present.

## Adding to the Gallery page

//TODO

## Adding to the Listen page

Markdown files found at: `src/videos/video-N.md`. Should contain frontmatter and then HTML for an embedded video:

```markdown
---
title: Hugo's video
---

<iframe src="https://www.youtube.com/embed/ZLyDvABxGF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

The `title` value will be shown as a small title above each video.

The `<iframe>` HTML below the frontmatter should be copied from YouTube (Share > Embed ) and have the `width` and `height` attributed deleted before pasting in the markdown file.

You can add as many markdown files as you want in  `src/videos`, and they'll be shown in alphabetical order of the filenames, so stick to the `video-n.md` filename convention for simplicity!