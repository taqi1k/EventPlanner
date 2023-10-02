<template>
    <div>
      <canvas id="pie-chart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import pieChartData from '../assets/piedata.js';
  export default {
    name: 'PieChart',
    data() {
      return{
        pieChartData: pieChartData
      }
    },
    mounted(){
      const ctx = document.getElementById('pie-chart');
      new Chart(ctx, this.pieChartData);
    }
  }
  </script>