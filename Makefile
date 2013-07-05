all: css/app.css bower_deps

less: css/app.css
css/app.css: less/app.less
	lessc $^ $@

.PHONY: bower_deps
bower_deps:
	bower install
