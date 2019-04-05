<template>
    <div>
        <button @click="fetch">fetch</button>
        <p>
            {{ fetchContent }}
        </p>
    </div>
</template>

<script>
    import '@src/common/libs'

    export default {
        data() {
            return {
                fetchContent: ''
            }
        },
        methods: {
            fetch() {
                this.axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
                    this.fetchContent = response;
                })
            }
        }
    }
</script>

<style>

</style>