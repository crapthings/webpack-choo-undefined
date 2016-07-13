module.exports = () => {
  return render `
    <div onload=${loaded}>
      <h1>home</h1>
    </div>
  `

  function loaded(e) {
    console.log('home loaded!')
  }
}
