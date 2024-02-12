const colors = [
  {
    name: '82',
    color: '411c7bff'
  },
  {
    name: '81',
    color: '441b91ff'
  },
  {
    name: '73',
    color: '543bb3ff'
  },
  {
    name: '86',
    color: 'c94b9fff'
  },
  {
    name: '87',
    color: 'd254a5ff'
  },
  {
    name: '147',
    color: 'f3c5eaff'
  },
  {
    name: '88',
    color: 'f6bde5ff'
  },
  {
    name: '357',
    color: 'ffd2dfff'
  },
  {
    name: 'f16',
    color: 'dac391ff'
  },
  {
    name: '17',
    color: 'ecb0e3ff'
  },
  {
    name: '84',
    color: 'ffd4f5ff'
  },
  {
    name: '25',
    color: 'f4e3dbff'
  },
  {
    name: '138',
    color: 'f2c8deff'
  },
  {
    name: '137',
    color: 'f3cfe9ff'
  },
  {
    name: 'f49',
    color: 'eabdbaff'
  },
  {
    name: '356',
    color: 'f6cbd2ff'
  },
  {
    name: '155',
    color: 'd8a19eff'
  },
  {
    name: '410',
    color: 'deb19eff'
  },
  {
    name: '172',
    color: '81dfd6ff'
  },
  {
    name: '97',
    color: 'dba791ff'
  },
  {
    name: '100',
    color: 'ad7d5cff'
  },
  {
    name: '96',
    color: 'a8766fff'
  },
  {
    name: '85',
    color: 'b33ba5ff'
  },
  {
    name: '126',
    color: 'dc51aeff'
  },
  {
    name: '125',
    color: 'e069c5ff'
  },
  {
    name: '6',
    color: 'fa8bdaff'
  },
  {
    name: '198',
    color: 'f58dc8ff'
  },
  {
    name: '9',
    color: 'f0b3d2ff'
  },
  {
    name: '8',
    color: 'f7b4c5ff'
  },
  {
    name: '7',
    color: 'f7b6beff'
  },
  {
    name: '135',
    color: 'f4d9d2ff'
  },
  {
    name: '375',
    color: 'ffead8ff'
  },
  {
    name: 'f69',
    color: 'eacbc9ff'
  },
  {
    name: '379',
    color: 'f7dfd5ff'
  },
  {
    name: '139',
    color: 'edd1ccff'
  },
  {
    name: '366',
    color: 'fbe0d5ff'
  },
  {
    name: 'f40',
    color: 'fde4c8ff'
  },
  {
    name: '361',
    color: 'f9d9ccff'
  },
  {
    name: 'f17',
    color: 'd4ae70ff'
  },
  {
    name: '20',
    color: 'debb9dff'
  },
  {
    name: '169',
    color: 'c4b1a2ff'
  },
  {
    name: 'f46',
    color: 'b05d4bff'
  },
  {
    name: '91',
    color: '983d45ff'
  },
  {
    name: '4',
    color: 'd44056ff'
  },
  {
    name: '10',
    color: 'd8495cff'
  },
  {
    name: '11',
    color: 'e15d6aff'
  },
  {
    name: '121',
    color: 'f988a0ff'
  },
  {
    name: '107',
    color: 'f5c89fff'
  },
  {
    name: '89',
    color: 'f0a1ceff'
  },
  {
    name: '26',
    color: 'ebd6b7ff'
  },
  {
    name: '153',
    color: 'f9e6d7ff'
  },
  {
    name: '130',
    color: 'f7dce1ff'
  },
  {
    name: 'f73',
    color: 'f9e5e7ff'
  },
  {
    name: '196',
    color: 'f2d8e3ff'
  },
  {
    name: '209',
    color: 'e6cfc1ff'
  },
  {
    name: '109',
    color: 'ede1d3ff'
  },
  {
    name: '133',
    color: 'f3e5dcff'
  },
  {
    name: '132',
    color: 'f3e2d8ff'
  },
  {
    name: 'f38',
    color: 'f6e2caff'
  },
  {
    name: 'f41',
    color: 'e1b3a6ff'
  },
  {
    name: '101',
    color: 'ddb087ff'
  },
  {
    name: 'f15',
    color: 'c6b393ff'
  },
  {
    name: '162',
    color: 'd4a287ff'
  },
  {
    name: '94',
    color: 'aa635fff'
  },
  {
    name: '412',
    color: 'ab7f74ff'
  },
  {
    name: '95',
    color: '975c56ff'
  },
  {
    name: '3',
    color: 'e76885ff'
  },
  {
    name: '13',
    color: 'ed7388ff'
  },
  {
    name: '18',
    color: 'f3afb9ff'
  },
  {
    name: '218',
    color: 'ffdab8ff'
  },
  {
    name: '414',
    color: 'fae8d4ff'
  },
  {
    name: 'f33',
    color: 'f1d6bbff'
  },
  {
    name: '142',
    color: 'f6e1c4ff'
  },
  {
    name: '28',
    color: 'f8d5d8ff'
  },
  {
    name: '136',
    color: 'f5dcdfff'
  },
  {
    name: '367',
    color: 'fbe3d7ff'
  },
  {
    name: 'f68',
    color: 'fbe7e8ff'
  },
  {
    name: '29',
    color: 'f6e4daff'
  },
  {
    name: '131',
    color: 'f6e4e0ff'
  },
  {
    name: 'f23',
    color: 'dab37cff'
  },
  {
    name: 'f8',
    color: 'e4cd80ff'
  },
  {
    name: 'f27',
    color: 'e5cd9bff'
  },
  {
    name: '104',
    color: 'c5a455ff'
  },
  {
    name: 'f43',
    color: 'dcc5b3ff'
  },
  {
    name: 'f36',
    color: 'c9ada1ff'
  },
  {
    name: 'f47',
    color: 'bea19bff'
  },
  {
    name: '411',
    color: 'b0938bff'
  },
  {
    name: '99',
    color: '7b6267ff'
  },
  {
    name: '5',
    color: 'e35a6cff'
  },
  {
    name: '12',
    color: 'e97b7aff'
  },
  {
    name: 'f54',
    color: 'efbeafff'
  },
  {
    name: 'f70',
    color: 'ebc7c9ff'
  },
  {
    name: '369',
    color: 'f9e3d8ff'
  },
  {
    name: '141',
    color: 'f1e0d0ff'
  },
  {
    name: '154',
    color: 'fbd6c3ff'
  },
  {
    name: 'f53',
    color: 'f5d5d0ff'
  },
  {
    name: '378',
    color: 'f7ebe9ff'
  },
  {
    name: 'f74',
    color: 'fce6e9ff'
  },
  {
    name: '77',
    color: 'e8dbefff'
  },
  {
    name: 'f5',
    color: 'fbeba9ff'
  },
  {
    name: 'f52',
    color: 'ddd9ceff'
  },
  {
    name: '415',
    color: 'fff0d6ff'
  },
  {
    name: '134',
    color: 'f4e1d0ff'
  },
  {
    name: 'f50',
    color: 'fbf4e3ff'
  },
  {
    name: '417',
    color: 'e2c0a4ff'
  },
  {
    name: '92',
    color: '754345ff'
  },
  {
    name: 'f44',
    color: 'dcb4aaff'
  },
  {
    name: '102',
    color: 'ad807aff'
  },
  {
    name: '93',
    color: '9e6e60ff'
  },
  {
    name: 'f48',
    color: '82625cff'
  },
  {
    name: '22',
    color: 'e06d50ff'
  },
  {
    name: '16',
    color: 'ea7b81ff'
  },
  {
    name: '376',
    color: 'df9c96ff'
  },
  {
    name: 'f45',
    color: 'f7b57b'
  },
  {
    name: '36',
    color: 'f8c48f'
  },
  {
    name: 'f37',
    color: 'ffe0b8'
  },
  {
    name: 'f31',
    color: 'ffe3bfff'
  },
  {
    name: 'f26',
    color: 'ffdcafff'
  },
  {
    name: 'f18',
    color: 'f7f2dcff'
  },
  {
    name: '373',
    color: 'f5f6f0ff'
  },
  {
    name: '146',
    color: 'f2e4f5ff'
  },
  {
    name: '145',
    color: 'e3e3efff'
  },
  {
    name: 'wg1',
    color: 'dfd9ddff'
  },
  {
    name: '27',
    color: 'f1e4deff'
  },
  {
    name: '365',
    color: 'fff2e1ff'
  },
  {
    name: 'f10',
    color: 'f5f0ddff'
  },
  {
    name: 'f56',
    color: 'cf9d92ff'
  },
  {
    name: 'f19',
    color: 'dad0c4ff'
  },
  {
    name: 'wg2',
    color: 'c6b3b5ff'
  },
  {
    name: 'wg3',
    color: 'a79ca4ff'
  },
  {
    name: 'wg4',
    color: '9a8887ff'
  },
  {
    name: '98',
    color: '3a222fff'
  },
  {
    name: '122',
    color: 'ee8460ff'
  },
  {
    name: '15',
    color: 'db5963ff'
  },
  {
    name: '103',
    color: 'dd937aff'
  },
  {
    name: '21',
    color: 'df9f61ff'
  },
  {
    name: '140',
    color: 'f2b694ff'
  },
  {
    name: 'f28',
    color: 'dbb77dff'
  },
  {
    name: '152',
    color: 'ffefd3ff'
  },
  {
    name: '360',
    color: 'feeedfff'
  },
  {
    name: '370',
    color: 'ffe5d8ff'
  },
  {
    name: 'f152',
    color: 'f6f8eaff'
  },
  {
    name: '0',
    color: 'f3faffff'
  },
  {
    name: 'cg05',
    color: 'dfe5e9ff'
  },
  {
    name: 'cg1',
    color: 'dadae4ff'
  },
  {
    name: 'cg2',
    color: 'ccd8e3ff'
  },
  {
    name: 'cg3',
    color: 'b6c4d1ff'
  },
  {
    name: 'cg4',
    color: 'b5b9c4ff'
  },
  {
    name: 'wg5',
    color: '8f8a90ff'
  },
  {
    name: 'wg6',
    color: 'a19ea5ff'
  },
  {
    name: 'wg7',
    color: '96939fff'
  },
  {
    name: 'wg8',
    color: '6a5f63ff'
  },
  {
    name: 'wg9',
    color: '454351ff'
  },
  {
    name: '120',
    color: '190c13ff'
  },
  {
    name: '34',
    color: 'eabb2bff'
  },
  {
    name: 'f42',
    color: 'f7ae85ff'
  },
  {
    name: '32',
    color: 'edb657ff'
  },
  {
    name: 'f22',
    color: 'e4af63ff'
  },
  {
    name: '374',
    color: 'fbece7ff'
  },
  {
    name: 'f25',
    color: 'fcd59eff'
  },
  {
    name: '407',
    color: 'fcecd3ff'
  },
  {
    name: '371',
    color: 'ffe3cbff'
  },
  {
    name: '413',
    color: 'ffe3cbff'
  },
  {
    name: 'f144',
    color: 'fcffdfff'
  },
  {
    name: '173',
    color: 'fcffdfff'
  },
  {
    name: 'wg0.5',
    color: 'eae7eeff'
  },
  {
    name: 'bg1',
    color: 'd3e1ecff'
  },
  {
    name: 'gg3',
    color: 'b4c8d1ff'
  },
  {
    name: 'bg3',
    color: 'b9cee1ff'
  },
  {
    name: 'bg5',
    color: '809fb1ff'
  },
  {
    name: 'cg5',
    color: '9ba2aaff'
  },
  {
    name: 'cg6',
    color: '606777ff'
  },
  {
    name: 'cg7',
    color: '525b6aff'
  },
  {
    name: 'cg8',
    color: '3d3f56ff'
  },
  {
    name: 'cg9',
    color: '3f405fff'
  },
  {
    name: 'f',
    color: '292433ff'
  },
  {
    name: '23',
    color: 'f19d52ff'
  },
  {
    name: '44',
    color: 'f9c940ff'
  },
  {
    name: 'f29',
    color: 'f2c175ff'
  },
  {
    name: '33',
    color: 'f6c44bff'
  },
  {
    name: 'f32',
    color: 'e3d2b6ff'
  },
  {
    name: 'f14',
    color: 'faeaaeff'
  },
  {
    name: '416',
    color: 'f5e6c5ff'
  },
  {
    name: 'f20',
    color: 'e9dcbcff'
  },
  {
    name: 'f3',
    color: 'dde1d1ff'
  },
  {
    name: 'f34',
    color: 'ffe2b9ff'
  },
  {
    name: '166',
    color: 'ccebc4ff'
  },
  {
    name: 'gg1',
    color: 'dfeaeeff'
  },
  {
    name: '182',
    color: 'a8ecf8ff'
  },
  {
    name: '179',
    color: '1fd9d8ff'
  },
  {
    name: '143',
    color: 'b2e9f7ff'
  },
  {
    name: '144',
    color: '9dcaf1ff'
  },
  {
    name: 'bg5',
    color: '7b9eb1ff'
  },
  {
    name: 'gg5',
    color: '809caaff'
  },
  {
    name: 'bg7',
    color: '516c87ff'
  },
  {
    name: 'gg7',
    color: '475061ff'
  },
  {
    name: 'gg9',
    color: '444758ff'
  },
  {
    name: 'bg9',
    color: '34425dff'
  },
  {
    name: '31',
    color: 'eebb52ff'
  },
  {
    name: '24',
    color: 'f1b53dff'
  },
  {
    name: 'f24',
    color: 'ffe7afff'
  },
  {
    name: '49',
    color: 'f3e195ff'
  },
  {
    name: 'f39',
    color: 'ffe2baff'
  },
  {
    name: 'f11',
    color: 'f8ebc9ff'
  },
  {
    name: 'f13',
    color: 'ddd2b4ff'
  },
  {
    name: 'f147',
    color: 'f3fad1ff'
  },
  {
    name: '174',
    color: 'bfd0a3ff'
  },
  {
    name: '175',
    color: '93c48cff'
  },
  {
    name: '175',
    color: '93c48cff'
  },
  {
    name: 'f1',
    color: 'fdf1cbff'
  },
  {
    name: '178',
    color: '4de1e3ff'
  },
  {
    name: '171',
    color: '52e5deff'
  },
  {
    name: '58',
    color: '0ecec1ff'
  },
  {
    name: '185',
    color: '99ddffff'
  },
  {
    name: '183',
    color: '5db9f0ff'
  },
  {
    name: '75',
    color: 'bbc7edff'
  },
  {
    name: '83',
    color: '7c48aaff'
  },
  {
    name: '1',
    color: '810d32ff'
  },
  {
    name: '2',
    color: '94184eff'
  },
  {
    name: '62',
    color: '254b82ff'
  },
  {
    name: '35',
    color: 'f7d323ff'
  },
  {
    name: 'f7',
    color: 'f7dd88ff'
  },
  {
    name: '38',
    color: 'ece678ff'
  },
  {
    name: 'f151',
    color: 'f3ed9fff'
  },
  {
    name: 'f9',
    color: 'f3e9afff'
  },
  {
    name: 'f21',
    color: 'ffe8b2ff'
  },
  {
    name: '164',
    color: 'f2e88eff'
  },
  {
    name: '55',
    color: '0aaa7eff'
  },
  {
    name: '46',
    color: '0fbe81ff'
  },
  {
    name: '47',
    color: '28c32bff'
  },
  {
    name: '59',
    color: '1abc67ff'
  },
  {
    name: '76',
    color: '86cffcff'
  },
  {
    name: '56',
    color: '08a071ff'
  },
  {
    name: '53',
    color: '077677ff'
  },
  {
    name: '167',
    color: 'c1e7bdff'
  },
  {
    name: '57',
    color: '099f96ff'
  },
  {
    name: '68',
    color: '17d3dfff'
  },
  {
    name: '67',
    color: '14c2e7ff'
  },
  {
    name: 'f71',
    color: 'dcadc1ff'
  },
  {
    name: 'f30',
    color: 'f9dabdff'
  },
  {
    name: '66',
    color: '0dbae5ff'
  },
  {
    name: '72',
    color: '1a449aff'
  },
  {
    name: '37',
    color: 'eed914ff'
  },
  {
    name: '45',
    color: 'f1e31eff'
  },
  {
    name: '123',
    color: 'cce04bff'
  },
  {
    name: '124',
    color: '92c922ff'
  },
  {
    name: '48',
    color: 'a6cf19ff'
  },
  {
    name: '163',
    color: 'dfeb99ff'
  },
  {
    name: '41',
    color: 'd3bd57ff'
  },
  {
    name: '42',
    color: '737543ff'
  },
  {
    name: '43',
    color: '0f5b34ff'
  },
  {
    name: '51',
    color: '072326ff'
  },
  {
    name: '50',
    color: '054c5cff'
  },
  {
    name: '52',
    color: '0a5c48ff'
  },
  {
    name: '54',
    color: '036467ff'
  },
  {
    name: '61',
    color: '069cb8ff'
  },
  {
    name: '65',
    color: '09a7c1ff'
  },
  {
    name: '14',
    color: 'e2867bff'
  },
  {
    name: '63',
    color: '069be0ff'
  },
  {
    name: '64',
    color: '0679b8ff'
  },
  {
    name: '70',
    color: '0969cdff'
  },
  {
    name: '74',
    color: '1070d7ff'
  },
  {
    name: '71',
    color: '0432bcff'
  },
  {
    name: '69',
    color: '293f8bff'
  }
]

export { colors };