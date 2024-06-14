const {createApp} = Vue;

const app = createApp({
    
    data() {
        return {
            message: "Hello World!",
            parentCount: 1,
        }
    },

    methods: {
        onType(e) {
            // console.log(e.target.value);
            this.message = e.target.value;
        },

        onTitleChange(title) {
            console.log('Title change in parent', title);
            this.message = title;
        }
    }
});

app.component('counter', {
    props: {
        modelValue: {
            type: Number
        },
        title: {
            type: String
        }
    },
    template: `
        <div>
            modelValue: {{ modelValue }}
            <button @click="updateModel">Add to modelValue</button>
            <br>
            count: {{ count }}
            <button @click="count++">Add to count</button>
            <br>
            title: {{ title }}
            <button @click="updateTitle">Update Title</button>
        </div>
    `,
    data() {
        return {
            count: 0,
        }
    },

    methods: {
        updateModel() {
            this.$emit('update:modelValue', this.modelValue + 1);
        },

        updateTitle() {
            this.$emit('titleChange', 'My new title!')
        }
    }
})

app.mount('#app')