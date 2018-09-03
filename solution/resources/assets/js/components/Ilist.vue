<template>
    <div>
            <div class="">
                <div class="row screen">
                    <div class="col-md-6 col-md-push-6 arm banglente text-center masthead-content">
                        <h1>Full Stack Developer Task</h1>
                        <p>by <strong>testio<span class="dazymas">.</span></strong></p>
                    </div>
                    <div class="col-md-6 col-md-pull-6 arm skaitykle">
                        <section v-for="item in list" class="mb-2">
                            <div class="konteineris">
                                <article class="issue-header">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <i class="fas fa-exclamation-circle dazymas"></i>
                                        </div>
                                        <div class="col-md-9">
                                            <router-link v-bind:to="'/home/' +item.number" class="linkas">
                                                    {{ item.title }}
                                            </router-link>
                                            <span v-for="note in item.labels">
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
                                        </div>
                                        <div class="col-md-2 pilka">
                                            <i class="far fa-comment-alt"></i> {{ item.comments }}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1"># {{ item.id }}  Opened {{ moment(item.created_at).fromNow() }} by <span class="dazymas">{{ item.user.login }}</span></div>
                                    </div>
                                </article>
                            </div>


                        </section>
                        <!--<ul class="pagination">-->
                            <!--<li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.prev_page_url)">Previous</a></li>-->

                            <!--<li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a></li>-->

                            <!--<li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.next_page_url)">Next</a></li>-->
                        <!--</ul>-->
                    </div>
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
                url: 'ttps://api.github.com/repos/waffleio/waffle.io/issues',
                pagination: {},
                articles: [],
            }
        },
//        created() {
//            this.fetchArticles();
//        },
        mounted: function () {
            console.log('List loaded');
//            fetch("https://api.github.com/repos/waffleio/waffle.io/issues")
//                .then(response => response.json()).then((data) => {this.list = data;})
            this.fetchList();
        },
        methods: {
            fetchList: function () {
                //let $this = this
                console.log('List loading');
                axios.get('https://api.github.com/repos/waffleio/waffle.io/issues')
                    .then((response) => {
                        console.log(response.data);
                        this.list = response.data;
                }).catch((error) => {
                    console.log(error);
                    });
                //$this.pagination(response.data)
                },
//            makePagination(data){
//                let pagination = {
//                    current_page: data.current_page,
//                    last_page: data.last_page,
//                    next_page: data.next_page_url,
//                    prev_page: data.prev_page_url,
//                }
//                this.pagination = pagination
//            }
//            fetchArticles(page_url){
//                let vn = this;
//                page_url = axios.headers.common['links']('https://api.github.com/repos/waffleio/waffle.io/issues')
//                    .then((response) => {
//                        console.log('psl');
//                        console.log(response.data);
//                        //this.list = response.data;
//                    }).catch((error) => {
//                        console.log(error);
//                    });
//                fetch(page_url)
//                    .then(res = res.json())
//                    .then(res => {
//                        this.articles = res.data;
//                        console.log('psuls');
//                        console.log(res.data);
//                        vn.makePagination(res.meta, res.links)
//                            .catch(err => console.log(err));
//                    })
//            },
//            makePagination(meta, links) {
//                let pagination = {
//                    current_page: meta.current_page,
//                    last_page: meta.last_page,
//                    next_page_url: links.next,
//                    prev_page_url: links.prev
//                };
//                this.pagination = pagination;
//            },
        }
    }
</script>
