const gulp = require('gulp')
const browsersync = require('browser-sync').create()
const ghPages = require('gulp-gh-pages')

//metalsmith and plugins
const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')
const ignore = require('metalsmith-ignore')
const dateFormatter = require('metalsmith-date-formatter')
const sass = require('metalsmith-sass')

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
    .use(sass({
      outputDir: function(originalPath){
        return originalPath.replace('sass', 'css')
      },
      outputStyle: 'expanded',
    }))
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
    .use(ignore(['cards/*', 'sass/*']))
    .use(dateFormatter({
      dates: [
        {
          key: 'publishDate',
          format: 'DD MMMM YYYY',
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

gulp.task('serve', () => {
  browsersync.init({
    server: {
      baseDir: 'build',
    },
  })
})

gulp.task('refresh', ['buildSite'], () => {
  return browsersync.reload()
})

gulp.task('watch', () => gulp.watch(['src/**', 'layouts/**', 'partials/**'], ['refresh']))

gulp.task('default', ['buildSite', 'serve', 'watch'])


//deploy to github pages - not part of default task
//excellent walkthrough of how to set up github pages and how to use this at:
//http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
gulp.task('deploy', ['buildSite'], () => {
	return gulp.src('./public/**/*')
				.pipe(ghPages())
})
