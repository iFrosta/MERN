export default class M {
  constructor() {
    console.log('unset')
  }
  static toast(text) {
    // console.log(text)
    if (!document.querySelector('.toast')) {
      let pop = document.createElement('div')
      pop.textContent = `${text}`
      pop.setAttribute('class', 'toast')
      document.body.appendChild(pop)
      setTimeout(function(){
        document.body.removeChild(pop)
      }, 5000);
    } else {
      document.querySelector('.toast').innerHTML =  `${text}`
    }
  }
}
