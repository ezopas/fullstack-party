<template>
    <div class="container">
        <div class="dazymas rodykle">
            <a href="/home"><i class="fas fa-undo"></i> Back to issues</a>
        </div>
        <article class="issue-header">
            <h1>{{ list.title }} <span class="pilka">#{{ list.number }}</span>
                <span v-for="note in list.labels" class="dydis">
                    <span v-if="note.name == 'bug'" class="noutas erroras">
                        {{ note.name }}
                    </span>
                    <span v-else-if="note.name == 'uncomfirmed' || note.name == 'regression' || note.name == 'browser quirks'" class="noutas unconfirm">
                        {{ note.name }}
                    </span>
                    <span v-else-if="note.name == 'contribution welcome' || note.name == 'help wanted'" class="noutas zalia">
                        {{ note.name }}
                    </span>
                    <span v-else-if="note.name == 'contribution welcome' || note.name == 'has PR' || note.name == 'important'" class="noutas viol">
                        {{ note.name }}
                    </span>
                    <span v-else-if="note.name == 'backlog' || note.name == 'research' || note.name == 'architecture'" class="noutas zydra">
                        {{ note.name }}
                    </span>
                    <span class="noutas warningas" v-else>
                        {{ note.name }}
                    </span>
                </span>
            </h1>


            <p><span class="mygtukas"><i class="fas fa-exclamation-circle"></i> {{ list.state }}</span> <span class="dazymas">{{ list.user.login }}</span> opened this issue {{ moment(list.created_at).fromNow() }} - {{ list.comments }} comment</p>
        </article>
        <div class="row remas">
            <div class="col-md-2 text-center">
                <img class="avataras" v-bind:src="list.user.avatar_url">
            </div>
            <div class="col-md-10">
                <article class="issue-header">
                    <p><span class="dazymas">{{ list.user.login }}</span> commented </p>
                    <hr>
                    <p>{{ list.body }}</p>
                </article>
            </div>
        </div>



    </div>
</template>

<script>
    var moment = require('moment');
    export default {
        data: function (){
            return {
                moment:moment,
                list:[],
                id: this.$route.params.id
            }
        },
        mounted: function () {
            console.log('List loaded');
            this.fetchList();
        },
        methods: {
            fetchList: function () {
                console.log('List loading');
                axios.get('https://api.github.com/repos/waffleio/waffle.io/issues/' +this.id)
                    .then((response) => {
                        console.log(response.data);
                        this.list = response.data;
                    }).catch((error) => {
                    console.log(error);
                });
            },
        }
    }
</script>