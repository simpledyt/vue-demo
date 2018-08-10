import { Pie } from '@/utils/base-charts'

export default {
  extends: Pie,
  data () {
    return {
      pieData: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#4d5e70',
              '#7c89fb',
              '#00D8FF',
              '#f87979'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.pieData, { responsive: true, maintainAspectRatio: false })
  }
}
