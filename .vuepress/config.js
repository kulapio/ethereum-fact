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
      { text: 'Run node', link: '/runnode/' },
      { text: 'Raiden network', link: '/raiden/' },
      { text: 'Github', link: 'https://github.com/kulapio/EthereumFact.git' },
    ],
    sidebar: [
      ['/fact/', 'Fact'],
      ['/runnode/', 'Run node'],
      ['/raiden/', 'Raiden network']
    ]
  }
}