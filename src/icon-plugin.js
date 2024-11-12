import { Icon } from '@vicons/utils'
import LogoGithub from '@vicons/carbon/LogoGithub'
import Blog from '@vicons/carbon/Blog'
import Email from '@vicons/carbon/Email'

export default {
  install(app) {
    app.component('Icon', Icon)
    app.component('LogoGithub', LogoGithub)
    app.component('Blog', Blog)
    app.component('Email', Email)
  }
}