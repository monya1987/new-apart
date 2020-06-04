import data from './index/urlsTest';
import config from './config.js';
import parser from './parsers/getRecords';
const tress = require('tress');
const needle = require('needle');
const cheerio = require('cheerio');
const resolve = require('url').resolve;
const fs = require('fs');


let results = [];
const q = tress((record, callback) => {
    const url = encodeURI(config.url+record.url);
    needle.get(url, (err, res) => {
        if (err) throw err;
        const $ = cheerio.load(res.body, {
            normalizeWhitespace: true,
            xmlMode: true
        });
        const mainParser = parser($, record);
        results.push(mainParser);
        callback();
    });

}, 10); // 10 потоков

q.drain = () => {
    if (results.length) {
        results.map((result) => {
            const name = result.url.slice(1);
            fs.writeFileSync(`./../public/data/houses/${name}.json`, JSON.stringify(result, null, 4), 'utf8');
        });
    }
};


data.map((record) => {
    q.push(record);
});

