const gulp = require('gulp')

//metalsmith and plugins
const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')
const ignore = require('metalsmith-ignore')

//for building css
// const sass = require('gulp-sass')
// const prefix = require('gulp-autoprefixer')

const d = new Date()
const y = d.getFullYear()

gulp.task('buildSite', () => {
  return metalsmith(__dirname)
    .metadata({
      site: {
        title: 'not operational',
        url: 'notoperational.com',
        author: 'stephen ball',
        year: y,
      },
    })
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(collections({
      cards: {
        pattern: 'cards/*.md',
      },
      pages: {
        pattern: 'pages/*.md',
      },
    }))
    .use(ignore(['cards/*']))
    .use(markdown({
      gfm: true,
      smartypants: true,
      tables: true,
    }))
    .use(permalinks({
      pattern: ':title',
      relative: false,
    }))
    .use(layouts({
      engine: 'handlebars',
      partials: 'partials',
    }))
    .build((err) => {
      if(err) throw err
    })
})

gulp.task('default', ['buildSite'])
