import '@css/main.css'
import Vue from 'vue'
import Helloworld from '@components/HelloWorld.vue'

new Vue({
    el: '#app',
    components: {
        Helloworld
    },
    render: (h) => h(Helloworld)
})