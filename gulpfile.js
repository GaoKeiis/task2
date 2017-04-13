var gulp = require("gulp"),
//����sass
	sass = require("gulp-sass"),
//��⡢���б���web������
	server = require("gulp-webserver"),
//����ϲ����
	concat = require("gulp-concat"),
//ѹ��js
	uglify = require('gulp-uglify'),
//������
	rename = require('gulp-rename'),
//���İ汾��  ��MD5��׺
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	minifyHTML   = require('gulp-minify-html');
//����scss��ʽ��ӵ�css��
	gulp.task("sass",function(){
		return gulp.src("sass/*.scss",["sass"])
			.pipe(sass())
			.pipe(gulp.dest("css/"))
	});
//��Ȿ���е�����scss�ļ����иı�ʱ���Զ�����
gulp.task("server",function(){
	gulp.watch("sass/*.scss",["sass"]);
	return gulp.src("./")
		.pipe(server({
			livereload:true,
			directoryListing:true,
			open:true
		}));
});


gulp.task("default",["sass","server","rev","revCollector"]);