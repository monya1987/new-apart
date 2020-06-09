const sitemap = require('nextjs-sitemap-generator');

sitemap({
    baseUrl: 'https://www.new-apart.od.ua',
    pagesDirectory: __dirname + "/pages",
    targetDirectory : 'public/',
    ignoredPaths: ['api'],
});

console.log(`✅ sitemap.xml generated!`);