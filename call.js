const creatMyPDF = require('D:\\Coding\\my_project\\function.js');

const date = new Date();
const month = '0' + (date.getMonth()+1);
const getDate = date.getDate() + '.' + month + '.' + date.getFullYear();

const input = {
    name: 'Дмитрий Королюк',
    idnp: '2002004092146',
    mun: 'Бэлць',
    str: 'Дечебал',
    num: '168',
    ap: '26',
    tel: '079330243',
    email: 'dimakoroliuk@gmail.com',
    cad: '0.30055-1025-100',
    obmun: 'Бэлць',
    obstr: 'А. Руссо',
    obnum: '14А',
    obap: '',
    object: 'Торговый павильон',
    obyardage: '78',
    date: getDate,
}

const result = creatMyPDF(input)
result.
then(res => {
    console.log('AAAAAA from test.js: ', res.filename)
}).
catch(err => {
    console.log('err', err)
})