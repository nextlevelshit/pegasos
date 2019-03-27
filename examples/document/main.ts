import { Polygraph } from './../../src/index'
import { config } from './../config'
import { text } from './brave-new-world'
import './../../src/styles/main.scss'
import './styles.scss'

const wrapper = document.querySelector('#wrapper')
const polygraph = new Polygraph(wrapper, text, config)

console.log(wrapper)

polygraph.wrapper.innerHTML = polygraph.raw