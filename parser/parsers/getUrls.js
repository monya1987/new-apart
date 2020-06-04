const parser = ($, url) => {
    const selector = '.viewTile.viewTile_bild';
    let res = [];
    const a = url.indexOf('page-');

    let page = 1;
    const itemsPerPage = 27;
    if (a !== -1) {
        page = url.substring(a+5, url.length);
    }
    $(selector).map((index) => {
        const item = $(`${selector}:nth-child(${index + 1})`);
        const urlSelector = item.find('.viewTile__link').attr('href');
        let id = 0;
        if (page !== '1') {
            id = (page - 1) * itemsPerPage;
        }
        const card = {};
        card.id = index + id;
        card.title = item.find('.viewTile__dataMain .viewTile__location .viewTile__text').text();
        card.title = card.title.replace('ЖК ', '').replace('КД ', '');
        card.url = urlSelector
        card.myUrl = urlSelector.replace('-odessa', '')
                                .replace('zhk-', '')
                                .replace('kd-', '')
                                .replace('zhsk-', '')
                                .replace('zhd-', '');
        res.push(card);
    });
    return res;
};
export default parser;