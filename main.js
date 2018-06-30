// include _ from 'lodash';

var scroll = new SmoothScroll()
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
        type: 'test',
        monName: ['スライム', 'ゴブリン', 'ドラゴン'],
        // list: []
        val: [],
        val2: '',
        val3: '',
        val4: [],
        val5: 50,
        preview: '',
        price: 100,
        scrollY: 0,
        timer: null,
        width: 800,
        height: 600,
        budget: 300,
        limit: 2,
        items: [
            {id: 1, name: 'りんご', price: 100},
            {id: 2, name: 'ばなな', price: 200},
            {id: 3, name: 'イチゴ', price: 300},
            {id: 4, name: 'おれんじ', price: 400},
            {id: 5, name: 'めろん', price: 1500}
        ],
        order: false
        
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
            // 受け取ったインデックスの位置から1個要素を削除
            this.monsters.splice(index, 1)
        },

        doUpdate: function() {
            this.$set(this.monsters, 0, { id: 1, name: 'キングスライム', hp: 500})
        },

        doAttack: function(index) {

            this.monsters[index].hp -= 10
        },

        doFilter: function() {
            this.monsters = this.monsters.filter(function(el) {
                return el.hp >= 100
            })
        },

        handleClick2() {
            var count = this.$refs.count
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        },

        handleInput: function(event) {
            console.log("handleInput test")
        },

        handler: function(comment) {
            console.log(comment)
        },

        handleChange: function(event) {
            var file = event.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        },

        handleScroll: function() {
            if (this.timer === null) {
                this.timer = setTimeout(function() {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 100000)
            }
        },

        scrollTop: function() {
            scroll.animateScroll(0)
        },

        methodsData: function() { return Math.random() }
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll)

    //     axios.get('list.json').then(function(response) {
    //         this.list = response.data
    //     }.bind(this)).catch(function(e) {
    //         console.error(e)
    //     })
    // }

    // mounted: function() {
    //     console.log(this.$el)
    //     console.log(this.$refs.hello)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },

    computed: {
        halfWidth: {
            get: function() { return this.width / 2},
            set: function(val) { this.width = val * 2}
        },
        halfHeight: function() {
            return this.height / 2
        },
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function() { return Math.random() },

        matched: function() {
            return this.items.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },
        // sorted: function() {
        //     return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        // },
        limited: function() {
           return this.matched.slice(0, this.limit)
        }
    }
})