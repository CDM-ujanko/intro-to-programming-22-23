const {createApp} = Vue;

const app = createApp({
    
    data() {
        return {
            message: "Hello World!",
            counters: 3
        }
    }
});

app.component('my-first-component', {
    props: {
        initialCount: {
            type: Number,
            // required: true,
            default: 0
        }
    },
    template: `
        <div>
            {{ count }}
            <button @click="count++">Add one</button> 
        </div>
    `,
    data() {
        this.initialCount ++;
        return {
            count: this.initialCount
        }
    }
})

app.mount('#app')