import axios from 'axios'
import qs from 'qs'

// axios配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www.form-urlencodex:charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8008'
