// require('./login');

// require('../css/app.scss');
import app from '../css/app.scss'

import {login} from "./login"
login('admin', 'idunno')

console.log('app loaded')

var img = document.createElement('img')
img.style.height = "25%"
img.style.width = "25%"
img.src = require('../images/download.png')
document.getElementById('img_container').appendChild(img)
