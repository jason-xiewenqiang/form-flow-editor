# Vite2.x+ElementPlus+Vue3.x+Typescript

# Note
## Vue3 开发笔记
- 获取ref元素
```javascript
    // way one 
    <div :ref="dom"></div>

    setup() {
        const refs: HTMLElement = ""
        const dom = (el:HTMLElement) => {
            refs = el
        }
        return {
            dom
        }
    }
    // way two
    <div ref="dom"></div>

    setup () {
        let dom = ref(null);
        nextTick(() => {
            console.log(dom)
        })
        return {
            dom
        }
    }
```