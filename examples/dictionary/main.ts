import { Polygraph } from './../../src/index'
import { config } from './../config'
import './../../src/index.scss'
import './styles.scss'

const wrapper = document.querySelector('#wrapper')
const polygraph = new Polygraph(wrapper)

console.log(polygraph.wrapper)