import ceo from './ceo.jpg'
import coo from './coo.jpg'
import cfo from './cfo.jpg'
import cio from './cio.jpg'
import cao from './cao.jpg'
import sand from './sand.jpg'
import wire from './wire.jpg'
import cement from './cement.jpg'
import stone from './stones.jpg'
import pipe from './steel-pipe.jpg'
import shovel from './shovel.jpg'


const imgData = [
    {
        name: 'ceo',
        img: ceo
    },
    {
        name: 'coo',
        img: coo
    },
    {
        name: 'cfo',
        img: cfo
    },
    {
        name: 'cio',
        img: cio
    },
    {
        name: 'cao',
        img: cao
    },
    {
        name: 'shovel',
        img: shovel
    },
    {
        name: 'iron wire',
        img: wire
    },
    {
        name: 'cement',
        img: cement
    },
    {
        name: 'stones',
        img: stone
    },
    {
        name: 'sand',
        img: sand
    },
    {
        name: 'iron pipes',
        img: pipe
    },
    {
        name: 'none',
        img: ''
    }
]



function getImage(name){
      

    const iobj = imgData.find(obj => obj.name === name)

    return iobj.img
    
}


export default getImage



