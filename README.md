# vueJS

```javascript
new Vue({
    el: '#app',
    data: {
        title : 'Hello World'
    }.
    methods:{
        sayHello: function (){
            return this.title;
        }
    }
})
```

- `v-bind:href="link"` : bind as a part of html attritbte, link is variable here : v-bind is directive , href is attribute to bind as input and link is the value/property
- `{{variable}}` : binding between html tags
- `<h1 v-once>{{title}}</h1> : dont change value after-
- <p v-html></p>  `v-html`  :to render html instead of string
  **Listening to Event**

## v-on:click="increaseFuction"

- Passing Event object
- passing own arguement
- use `$event` to pass event as name is important
- `Event modifier` : v-on:mousemove.stop
  **Litening keyboard event**
- <input type="text" v-on:keyup="alertMe">
- `Key modifier`
  **Two Way Binding** - v-model="property name"
  **reacting to change in computer property**
- `computed` property on Vue instacne optimally render the page compared to method proepty on vue instance anc can be used a sproperty
- `Watch` : vue instance property - react to instance property changes and for asynchronous commouted
  **_Shortcuts_**
- v-on : @
- v-bind : :

**\* Dynamic styleing css**

- `:class="{className: condition}
- attahing direct class name
- :style="{backgroundColor: color}"

**_Conditional Rendering and list_**

- v-if= "show"
- v-else
  - <template><p></p></template>
- v-show : stay on the dom contrary to v-if
  ## Rendering List
  v-for = "item in itemArray" - `current index` v-for ="(item,i) in itemArray"
  - `keys` is similar to `trackBy` in angular
