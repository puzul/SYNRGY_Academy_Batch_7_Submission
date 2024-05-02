class Component {
  constructor (prop) {
    if (this.constructor===Component) throw new Error('Error')
  }
  render = () => {}
}