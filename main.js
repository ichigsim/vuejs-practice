var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        count: 34,
        list: ['りんご', 'ごりら', 'らっぱ'],
        show: true
        
    },
    methods: {
        handleClick: function(event){
            alert(event.target)
        }
    }
})