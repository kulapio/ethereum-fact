module.exports = {
  title: 'Ethereum Fact',
  description: 'Every fact on ethereum ecosystem',
  markdown: {
    lineNumbers: true
  },
  base: '/ethereum/fact/',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Fact', link: '/fact/' },
      { text: 'Dev', link: '/dev/' },
      { text: 'Node', link: '/runnode/' },
      { text: 'Wallet', link: '/wallet/' },
      { text: 'Github', link: 'https://github.com/kulapio/EthereumFact.git' },
    ],
    sidebar: [
      ['/fact/', 'Fact'],
      ['/dev/', 'Dev'],
      ['/runnode/', 'Node'],
      ['/wallet/', 'Wallet'],
      ['/dex/', 'Dex'],
      ['/2.0/', '2.0'],
    ]
  }
}