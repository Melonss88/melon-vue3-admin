<template>
    <div class="home-page common-main">
        <Statistic />
        
        <section class="home-echart-part1">
            <el-space wrap fill>
                <el-card class="box-card">
                    <ChartPie />
                </el-card>

                <el-card class="box-card">
                    <ChartVisits />
                </el-card>

                <el-card class="box-card">
                    <ChartLineBar />
                </el-card>
            </el-space>
        </section>

        <el-space>
            <el-card class="box-card">
                <ChartLine />
            </el-card>
        </el-space>
    </div>
</template>

<script setup lang="ts">
import Statistic from './components/Statistic.vue'
import ChartVisits from './components/ChartVisits.vue'
import ChartPie from './components/ChartPie.vue'
import ChartLineBar from './components/ChartLineBar.vue'
import ChartLine from './components/ChartLine.vue'

</script>

<style lang="less">
.home-page {
    .home-echart-part1 {
        padding: 20px 0;
    }
}

.el-space {
  display: flex!important;
  justify-content: space-between!important;
}
.el-space__item {
    flex: 1;
    min-width: auto!important;
    width: 30%;
}

</style>
