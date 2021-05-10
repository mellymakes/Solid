import darkBurger from './Group 60@2x.png'
import lightBurger from './Group 61@2x.png'


function getBurger(state){


    return state === true ? darkBurger : lightBurger
}

export default getBurger