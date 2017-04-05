const gulp = require('gulp')

//metalsmith and plugins
const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')
const ignore = require('metalsmith-ignore')
const dateFormatter = require('metalsmith-date-formatter')

//for building css
// const sass = require('gulp-sass')
// const prefix = require('gulp-autoprefixer')

const d = new Date()
const y = d.getFullYear()

gulp.task('buildSite', () => {
  return metalsmith(__dirname)
    .metadata({
      site: {
        title: 'Not Operational',
        url: 'notoperational.com',
        author: 'Stephen Ball',
        year: y,
      },
    })
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(collections({
      cards: {
        pattern: 'cards/*.md',
        sortBy: 'title',
      },
      pages: {
        pattern: 'pages/*.md',
      },
      posts: {
        pattern: 'posts/*.md',
        sortBy: 'publishDate',
        reverse: true,
      },
    }))
    .use(ignore(['cards/*']))
    .use(dateFormatter({
      dates: [
        {
          key: 'publishDate',
          format: 'dddd Do MMMM YYYY',
        },
      ]
    }))
    .use(markdown({
      gfm: true,
      smartypants: true,
      tables: true,
    }))
    .use(permalinks({
      pattern: ':title',
      relative: false,
      linksets:[
        {
          match: { collection: 'posts'},
          pattern: 'posts/:title',
        },
      ],
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
