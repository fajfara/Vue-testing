import MainIndex from './components/main.vue'
import AddIndex from './components/add.vue'


export default[
    {
        path: '/',
        component: MainIndex 
    },
    {
        path: '/add',
        component: AddIndex
    }
]