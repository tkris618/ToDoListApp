var app = new Vue({
    el: '#app',
    data: {
      newItem: '',
      shoppingList: [
        {name: "Milk", collected: false},
        {name: "Bread", collected: false}
    ],
      
    },
    methods: {
      clearAll: function () {
        this.shoppingList = []
        this.save()
      },
      deleteItem: function (n) {
        this.shoppingList.splice(n, 1)
        this.save()
      },
      addItem: function () {
        if(this.newItem !== ''){
            this.shoppingList.push({
                name: this.newItem,
                collected: false,
            })
            this.newItem = ''
            this.save()
        }
      },
      save: function () {
        localStorage.shoppingList = JSON.stringify(this.shoppingList)
      },
    },
    mounted() {
if(localStorage.shoppingList){
    this.shoppingList = JSON.parse(localStorage.shoppingList)
}
    },
  })
  
  