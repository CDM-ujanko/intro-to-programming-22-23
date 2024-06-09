const {createApp} = Vue;

const app = createApp({
    beforeCreate() {
        console.log('before create!', this.message);
    },

    created() {
        console.log('created!', this.message, document.getElementById('app')?.outerHTML);
    },

    beforeMount() {
        console.log('before mount!', this.message, document.getElementById('app')?.outerHTML);
    },

    mounted() {
        console.log('mounted!', this.message, document.getElementById('app')?.outerHTML);
        setTimeout(() => {
            this.message = 'new hello world!';
        }, 1000);

        // 
        document.addEventListener('scroll', this.scrollHandler)
        window.addEventListener('resize', this.resizeHandler)

    },

    beforeUpdate() {
        console.log('beforeUpdate!', this.message, document.getElementById('app')?.outerHTML);
    },

    updated() {
        console.log('updated!', this.message, document.getElementById('app')?.outerHTML);
    },

    beforeUnmount() {
        console.log('beforeUnmount!', this.message, document.getElementById('app')?.outerHTML);
        document.removeEventListener('scroll', this.scrollHandler)
        window.removeEventListener('resize', this.resizeHandler)
    },

    unmounted() {
        console.log('unmount!', this.message, document.getElementById('app')?.outerHTML);
    },



    data() {
        return {
            message: "Hello World!"
        }
    },

    methods: {
        helloMethod() {
            console.log('Just saying hello!');
        },

        scrollHandler(e) {
            console.log('scroll', e)
        },

        resizeHandler(e) {
            console.log('resize', e)
        }
    }
});

app.mount('#app');
console.log(app);

// setTimeout(() => {
//     app.unmount();
// }, 5000);