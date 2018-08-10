<template>
  <div class="dashboard">
    <cur-pie id="dashboardPie"/>
  </div>
</template>
<script>
import CurPie from '@/components/charts/cur-pie'
export default {
  title: '首页',
  components: {
    CurPie
  },
  data () {
    return {
      dataPoints: null,
      height: 20
    }
  },
  mounted () {
    setInterval(() => {
      this.fillData()
    }, 2000)
  },
  methods: {
    increaseHeight () {
      this.height += 10
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    fillData () {
      this.dataPoints = {
        labels: ['January' + this.getRandomInt(), 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>
<style lang="scss">
.dashboard {
}
</style>
