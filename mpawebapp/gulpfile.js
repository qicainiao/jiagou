//自动化工作流程
const gulp = require("gulp");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
const rollup = require("gulp-rollup");
const replace = require('rollup-plugin-replace');

//开发环境的gulp
gulp.task("builddev", () => {
    return watch('src/nodeui/**/*.js', {
        ignoreInitial: false
    }, () => {
        return gulp.src('src/nodeui/**/*.js')
            .pipe(babel({
                babelrc: false,
                "plugins": ["transform-es2015-modules-commonjs"]
              })).pipe(gulp.dest('dist'))
    })
});

gulp.task("buildprod",()=>{
  gulp.src('./src/nodeui/**/*.js')
  // transform the files here.
  .pipe(babel({
      babelrc: false,
      ignore:['./src/nodeui/config/index.js'],
      "plugins": ["transform-es2015-modules-commonjs"]
    }))
  .pipe(rollup({
    // any option supported by Rollup can be set here.
    output: {
        format: "cjs"
    },
    input: './src/nodeui/config/index.js',
    plugins: [
       replace({
        "process.env.NODE_ENV": JSON.stringify('production')
       })
     ]
  }))
  .pipe(gulp.dest('./dist'));
});


let _task= ["builddev"];
if (process.env.NODE_ENV == "production") {
  _task=["buildprod"];
}

gulp.task("default",_task);
