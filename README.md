this is a gulp wrapper for the json-to-sass-map npm module which basically converts this
```
{
  "typeline-config": {
    "typography": {
      "points": [
        [0, 1.2],
        [50, 1.6],
        [200, 1.8]
      ],
      "breakpoints": ["760px", "560px", "400px"]
    },
    "spacings": {
      "points": [
        [0, 1],
        [25, 2],
        [100, 2.5]
      ],
      "breakpoints": ["760px", "560px", "400px"]
    }
  }
}
```
to this
```
$typeline-config: (typography: (points: (0 1.2, 50 1.6, 200 1.8), breakpoints: (760px, 560px, 400px)), spacings: (points: (0 1, 25 2, 100 2.5), breakpoints: (760px, 560px, 400px)));
```

##Usage
install the npm package
```
npm install --save-dev gulp-json-to-sass-map
```
create a task that will convert your configuration file
```
var gulp = require('gulp'),
    jsonToSass = require('gulp-json-to-sass-map');
    
gulp.task('compile sass config', function() {
    return gulp.src('your/source/files/*.scss')
        .pipe(jsonToSass({
            source: 'path/to/source.json',
            output: 'path/to/destination.scss'
        }));
});
```
