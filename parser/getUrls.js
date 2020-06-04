import config from './config.js';
import getUrlsParser from './parsers/getUrls';
const tress = require('tress');
const needle = require('needle');
const cheerio = require('cheerio');
const resolve = require('url').resolve;
const fs = require('fs');

let results = [];
const q = tress((url, callback) => {
    needle.get(url, (err, res) => {
        if (err) throw err;
        const $ = cheerio.load(res.body, {
            normalizeWhitespace: false,
            xmlMode: true,
            decodeEntities: true
        });
        if (!url.includes('getpages')) {
            const parserRes = getUrlsParser($, url);
            parserRes.map(item => {results.push(item);});
        }
        callback($('.paginator').find('.paginator__link:last-child').text());
    });
}, 1); // 1 параллельных потоков

q.drain = () => {
    if (results.length) {
        // const data = JSON.parse(fs.readFileSync('./results/urls.json', 'utf-8'));
        // data.map((item, index) => {
        //     item.id = index;
        // });
        fs.writeFileSync(
            `./results/urls.json`,
            JSON.stringify(results, null, 4), 'utf8'
        );
    }
};
function getPagesCb (num) {
    if (num) {
        for (let i = 1; i <= num; i++) {
            q.push(`${config.url}${config.urlOdessa}/page-${i}`);
        }
    }
}

q.push(`${config.url}${config.urlOdessa}?getpages`, getPagesCb);





