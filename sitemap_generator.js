const sitemap = require('nextjs-sitemap-generator');
const urls = require('./public/data/ulrs');

const getRoutes = () => {
    const routes = [];
    urls.forEach((record) => {
        routes.push('/'+record.url);
    });
    return routes;
};

sitemap({
    baseUrl: 'https://www.new-apart.od.ua',
    pagesDirectory: __dirname + "/pages",
    targetDirectory : 'public/',
    ignoredPaths: ['api'],
    extraPaths: getRoutes(),
});

console.log(`✅ sitemap.xml generated!`);