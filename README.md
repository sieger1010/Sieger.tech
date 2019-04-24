# Sieger.Dev
Source code for my personal website

The dist folder is what gets deployed to sieger1010.github.io

# Project Progress
All plans and progress for this project can be viewed in the [projects](https://github.com/sieger1010/Sieger.Dev/projects) tab for this repository.

# Technologies Used

### Sass
I'm using node-sass combined with nodemon to auto-compile my sass everytime it changes and combined with the live server plugin in VSCode the page automatically refreshes whenever changes are made to the CSS, JS, or HTML of the site. The Sass files get compiled to a single minified css file in the /dist/css folder.

### Uglify-JS
Uglify JS compresses all of the js files I'm using into one single minified file which reduces the number of http calls which speeds up load time.

### Google Tag Manager and Analytics
I've created a Google Tag Manager and Analytics account to view where traffic is coming from and how many website visits I receive. The purpose of using Tag Manager is so that I can include all of the different tracking codes I might want to use, for example Facebook analytics and also LinkedIn analytics.

### Open Graph SEO
Open Graph is a technology developed by Facebook to better share the meta information about things used and shared between people online. In a practical sense for my personal website this is useful so that if I share my website on LinkedIn or Facebook, it will appear with a nice thumbnail picture, a title, and a description that I choose will best represent my website, along with SEO information related to the correct url of this page which is useful if you are sending GET information in the URL to individual users but you don't want that to appear when that page is being shared to other people.