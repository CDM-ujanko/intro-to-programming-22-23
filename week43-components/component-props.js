const {createApp} = Vue;

const app = createApp({
    
    data() {
        return {
            message: "Hello World!",
            articles: [
                {
                  "index": 0,
                  "picture": "http://placehold.it/32x32",
                  "title": "Polarium",
                  "text": "Quis magna commodo aliquip aliquip dolore excepteur."
                },
                {
                  "index": 1,
                  "picture": "http://placehold.it/32x32",
                  "title": "Roboid",
                  "text": "Duis consectetur duis do commodo."
                },
                {
                  "index": 2,
                  "picture": "http://placehold.it/32x32",
                  "title": "Kangle",
                  "text": "Eu qui ut occaecat est dolore Lorem qui consectetur."
                },
                {
                  "index": 3,
                  "picture": "http://placehold.it/32x32",
                  "title": "Dancerity",
                  "text": "Anim Lorem officia enim minim exercitation minim anim ipsum nisi voluptate irure amet anim."
                },
                {
                  "index": 4,
                  "picture": "http://placehold.it/32x32",
                  "title": "Nexgene",
                  "text": "Veniam consequat irure incididunt deserunt veniam est aute."
                },
                {
                  "index": 5,
                  "picture": "http://placehold.it/32x32",
                  "title": "Ronbert",
                  "text": "Eu dolor excepteur commodo quis laborum laborum aliqua sunt labore magna dolor Lorem."
                }
              ]
        }
    },

    methods: {
        onTitleChange([index, payload]) {
            console.log('parent saw title change event!', index, payload);
            this.articles[index].title = payload;
        }
    }
});

app.component('my-article', {
    props: {
        article: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    template: `
        <div class="card">
            <img :src="article.picture" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
                <p class="card-text">{{ article.text }}</p>
                <a href="#" @click="updateTitle" class="btn btn-primary">Do it!</a>
            </div>
        </div>
    `,

    data() {
        return {}
    },

    methods: {
        updateTitle() {
            console.log('title change click!', this.index);
            this.$emit('title-change', [this.index, 'new title!']);
        }
    }
})

app.component('my-article-model', {
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="card">
            <img :src="modelValue.picture" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ modelValue.title }}</h5>
                <p class="card-text">{{ modelValue.text }}</p>
                <a href="#" @click.prevent="updateTitle" class="btn btn-primary">Do it!</a>
            </div>
        </div>
    `,

    data() {
        return {}
    },

    methods: {
        updateTitle() {
            console.log('title change click! (MODEL)');
            this.$emit('update:modelValue', {
                title: 'my new title',
                text: this.modelValue.text,
                index: this.modelValue.index,
                picture: this.modelValue.picture,
            });
        }
    }
})

app.mount('#app')