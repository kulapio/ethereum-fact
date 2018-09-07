module.exports = {
  title: 'KULAP Dev',
  description: 'KULAP: Ethereum Fact',
  markdown: {
    lineNumbers: true
  },
  base: '/ethereum/fact/',
  themeConfig: {
    nav: [
      { text: 'Ethereum Fact', link: '/' },
      { text: 'Run node', link: '/runnode/' },
      { text: 'Raiden network', link: '/raiden/' },
      { text: 'Github', link: 'https://github.com/kulapio/EthereumFact.git' },
    ],
    sidebar: [
      '/',
      ['/runnode/', 'Run node'],
      ['/raiden/', 'Raiden network']
    ]
  }
}