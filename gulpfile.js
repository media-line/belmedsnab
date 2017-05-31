var gulp = require('gulp');
var rename = require("gulp-rename");

var path = {
            topMenu: 'bitrix/menu/top-menu',
            bottomMenu: 'bitrix/menu/bottom-menu',
            slider: 'bitrix/news.list/slider',
            iconBlocks: 'bitrix/news.list/icon-blocks',
            newsPreview: 'bitrix/news.list/news-preview',
            socialButtons: 'ml/social-buttons/.default',
            sliderPresentation: 'bitrix/news.list/slider-presentation',
            breadcrumbs: 'bitrix/breadcrumb/.default',
            catalogList: 'bitrix/news.list/products',
            accurayMap: 'bitrix/news.list/accuray-map',
            newsList: 'bitrix/news/articles/bitrix/news.list/.default',
            pagination: 'bitrix/system.pagenavigation/.default',
            }
            
var pathExcludeJS = [];
var pathExcludeCSS = [];

gulp.task('compile', function() {
    for (var name in path) {
        if (pathExcludeJS.indexOf(name) == -1) {
            gulp.src('public/js/'+name+'.js')
            .pipe(rename('script.js'))
            .pipe(gulp.dest('public/belmedsnab/components/'+path[name]));
        }
        
        if (pathExcludeCSS.indexOf(name) == -1) {
            gulp.src('public/css/'+name+'.css')
            .pipe(rename('style.css'))
            .pipe(gulp.dest('public/belmedsnab/components/'+path[name]));
        }
    }
    
    gulp.src('public/css/common.css')
        .pipe(rename('common.css'))
        .pipe(gulp.dest('public/belmedsnab/'));
        
    gulp.src('public/js/common.js')
        .pipe(rename('common.js'))
        .pipe(gulp.dest('public/belmedsnab/js/'));
        
    gulp.src('public/css/mainpage.css')
        .pipe(rename('mainpage.css'))
        .pipe(gulp.dest('public/belmedsnab/'));
        
    gulp.src('public/js/mainpage.js')
        .pipe(rename('mainpage.js'))
        .pipe(gulp.dest('public/belmedsnab/js/'));
        
        
    gulp.src('public/css/inner.css')
        .pipe(rename('inner.css'))
        .pipe(gulp.dest('public/belmedsnab/'));
        
    gulp.src('public/js/inner.js')
        .pipe(rename('inner.js'))
        .pipe(gulp.dest('public/belmedsnab/js/'));    


    gulp.src('public/css/commonWebpack.css')
        .pipe(rename('commonWebpack.css'))
        .pipe(gulp.dest('public/belmedsnab/'));
        
    gulp.src('public/js/commonWebpack.js')
        .pipe(rename('commonWebpack.js'))
        .pipe(gulp.dest('public/belmedsnab/js/'));    

        
        
    gulp.src('public/css/newsList.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/belmedsnab/components/bitrix/news/news/bitrix/news.list/.default'));    
        
    return true;
});

