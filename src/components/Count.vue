<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <hr>
        <h3>{{ $store.state.a.count }} - {{ count }}</h3>
        <div>
        <!--<button @click="$store.commit('add', 10)">+</button>-->
        <!--<button @click="reduce">-</button>-->
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>

</template>

<script>
  import store from '@/vuex/store'
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        msg: 'Hello Vuex'
      }
    },
    methods: {
      ...mapMutations([
        'add', 'reduce'
      ]),
      ...mapActions(['addAction', 'reduceAction'])
    },
//    computed: mapState({
//      count: state => state.count
//    }),
//    computed:mapState(['count']),
    computed:{
//      ...mapState(['count']),
//      count() {
//        return this.$store.getters.count
//      }
      ...mapGetters(['count'])
    },
    store
  }
</script>


<style scoped>

</style>
