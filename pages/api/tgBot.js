const telegram = require('telegram-bot-api');

// 236266447 My
// 525883409 Sveta
// 292138710 Masha
// @Garant_Odessa_bot
// @getidsbot

export default (req, res) => {
    console.log(req.query);
    const { name, phone } = req.query;
    if (name && phone) {
        const api = new telegram({
            token: '1079797165:AAETpXbqZR9E40ST3_dUOMcbFcPdT9VM7-4'
        });
        api.sendMessage({
            chat_id: [236266447, 525883409, 292138710],
            text: `${name} ${phone}, 'Визитка - Аврора'`
        });
    }
    res.statusCode = 200;
    res.json({ message: 'Success' })
}