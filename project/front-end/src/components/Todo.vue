<template>
    <div class="col-4">
    {{ input }}
        <form @submit.prevent="addToList" class="input-group mb-3">
            <input v-model="input" type="text" class="form-control" placeholder="Add item to list">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">Button</button>
            </div>
        </form>
        <ul class="list-group">

            <li 
                v-for="(item, i) in todo"
                class="list-group-item"
            >
                <input type="checkbox" @change="markDone(i)">
                {{ item }}
            </li>

            <li 
                v-for="(item, i) in done"
                class="list-group-item text-decoration-line-through"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                input: '',
                todo: ['Buy milk!', 'Go to the dentist!'],
                done: []
            }
        },

        methods: {
            addToList() {
                console.log('adding to list');
                if (!this.input) {
                    return;
                }
                this.todo.push(this.input);
                this.input = '';
            },

            markDone(i) {
                console.log('mark done!', i);
                let deleted = this.todo.splice(i, 1);
                this.done.push(deleted[0])
            }
        }
    }
</script>