# Pinia

> Intuitive, type safe and flexible Store for Vue

- 💡 Intuitive
- 🔑 Type Safe
- ⚙️ Devtools support
- 🔌 Extensible
- 🏗 Modular by design
- 📦 Extremely light
- ⛰️ Nuxt Module

Pinia works with both Vue 2 and Vue 3.

Pinia is the most similar English pronunciation of the word _pineapple_ in Spanish: _piña_. A pineapple is in reality a group of individual flowers that join together to create a multiple fruit. Similar to stores, each one is born individually, but they are all connected at the end. It's also a delicious tropical fruit indigenous to South America.

## 👉 [Demo with Vue 3 on StackBlitz](https://stackblitz.com/github/piniajs/example-vue-3-vite)

## 👉 [Demo with Nuxt 3 on StackBlitz](https://stackblitz.com/github/piniajs/example-nuxt-3)

## Help me keep working on this project 💚

- [Become a Sponsor on GitHub](https://github.com/sponsors/posva)
- [One-time donation via PayPal](https://paypal.me/posva)

---

## FAQ

A few notes about the project and possible questions:

**Q**: _Is Pinia the successor of Vuex?_

**A**: [Yes](https://vuejs.org/guide/scaling-up/state-management.html#pinia)

**Q**: _What about dynamic modules?_

**A**: Dynamic modules are not type safe, so instead [we allow creating different stores](https://pinia.vuejs.org/cookbook/composing-stores.html) that can be imported anywhere

## Installation

```bash
# or pnpm or yarn
npm install pinia
```

If you are using Vue <2.7, make sure to install latest `@vue/composition-api`:

```bash
npm install pinia @vue/composition-api
```

## Usage

### Install the plugin

Create a pinia (the root store) and pass it to app:

```js
// Vue 3
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

```js
// Vue 2
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // other options...
  // ...
  // note the same `pinia` instance can be used across multiple Vue apps on
  // the same page
  pinia,
})
```

For more detailed instructions, including [Nuxt configuration](https://pinia.vuejs.org/ssr/nuxt.html#nuxt-js), check the [Documentation](https://pinia.vuejs.org).

### Create a Store

You can create as many stores as you want, and they should each exist in different files:

```ts
import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: 'Eduardo',
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCounter: (state) => state.counter * 2,
    // use getters in other getters
    doubleCounterPlusOne(): number {
      return this.doubleCounter + 1
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0
    },
  },
})
```

`defineStore` returns a function that has to be called to get access to the store:

```ts
import { useMainStore } from '@/stores/main'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const main = useMainStore()

    // extract specific store properties
    const { counter, doubleCounter } = storeToRefs(main)

    return {
      // gives access to the whole store in the template
      main,
      // gives access only to specific state or getter
      counter,
      doubleCounter,
    }
  },
})
```

## Documentation

To learn more about Pinia, check [its documentation](https://pinia.vuejs.org).

## License

[MIT](http://opensource.org/licenses/MIT)
