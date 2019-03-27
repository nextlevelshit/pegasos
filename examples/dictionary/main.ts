import { Polygraph } from './../../src/index'
import { config } from './../config'
import './../../src/index.scss'
import './styles.scss'

const element = document.querySelector('#wrapper')
const polygraph = new Polygraph(element, config)

console.log(polygraph)