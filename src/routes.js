
import MainIndex from './components/main.vue'
import AddIndex from './components/add.vue'

// Route za home oz. main ter add page
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