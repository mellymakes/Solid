import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Navbar, Home, Hire, Store, Teams, About, Footer } from './pages'

export default function App() {


    const [isLight, setTheme] = useState(true)

    useEffect(() =>{


        const localTheme = JSON.parse(localStorage.getItem('isLight'))


        if(localTheme === null){
            localStorage.setItem('isLight', true)
        }else{
            setTheme(localTheme)
            console.log(localTheme);

            if(localTheme === true){
                document.getElementById('theme').href = "light.css"
            }
            else if(localTheme === false){
                document.getElementById('theme').href = "dark.css"
            }

            
        }

    }, [])


    function setLight(Tname){

        
        

        if(Tname === 'light'){

            if(isLight){
                return
            }

        
            localStorage.setItem('isLight', true)
          
            document.getElementById('theme').href = "light.css"

            setTheme(true)
        }else{
            if(isLight === false){
                return
            }
            
            localStorage.setItem('isLight', false)

            document.getElementById('theme').href = "dark.css"

            setTheme(false)
        }
    }

    


    return (
        <div>
            
            <Router>

                <Navbar lightState={isLight} setLight={setLight}/>


                    <Switch>

                        <Route path="/" exact component={Home}/>
                        <Route path="/hire" component={Hire}/>
                        <Route path="/store" component={Store}/>
                        <Route path="/teams" component={Teams}/>
                        <Route path="/aboutus" component={About}/>

                    </Switch>


                <Footer lightState={isLight}/>

            </Router>


        </div>
    )
}
