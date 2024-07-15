import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Basic chart'
  },
  series: [{
    data: [1, 2, 3, 4, 5, 4, 3, 2, 1]
  }]
}

const BasicChart = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

export default BasicChart;