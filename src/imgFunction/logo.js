import lightLogo from './lightlogo@1x.png'
import darkLogo from './darklogo@1x.png'


function logo (state){
    
    return state === false ? lightLogo : darkLogo
}


export default logo