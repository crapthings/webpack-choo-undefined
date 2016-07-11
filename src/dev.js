module.exports = {

  // hack to enable hot reload css
  reloadStyle(e) {
    console.log('[HMR]', 'Css hot update')
    if (e.data.search('webpackHotUpdate') === -1) return
    const link = document.querySelectorAll('link[href="bundle.css"]')[0]
    let linkHref = link.href
    link.href = 'about:blank'
    link.href = 'bundle.css'
  }

}
