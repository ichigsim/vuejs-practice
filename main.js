var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        count: 0,
        list: ['りんご', 'ごりら', 'らっぱ'],
        show: true,
        pi: 532.342357,
        scroll: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        classObject: {
            child: true,
           'is-active': false
        },
        styleObject: {
            color: 'pink',
            backgroundColor: 'lightgray'
        },
        item: {
            id: 1,
            alt: '商品1サムネイル',
            src: 'item.jpg',
            width: 200,
            height: 200
        },
        radius: 50,
        ok: true,
        monsters: [
            {id: 1, name: `スライム`, hp: 100},
            {id: 2, name: `ゴブリン`, hp: 200},
            {id: 3, name: `ドラゴン`, hp: 500}
        ],
        name: 'キマイラ',
        type: 'test'
        
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        },

        mounted: function() {
            this.scroll = 100
        },

        increment() {
            this.count += 1
        },

        doAdd: function() {
            var max = this.monsters.reduce(function(a, b){
                return a.id > b.id ? a.id : b.id
            }, 0)
            this.monsters.push({
                id: max + 1, 
                name: this.name, 
                hp: 500
            })
        },

        doRemove: function (index) {
            this.list.splice(index, 1)
          }      
    }
})