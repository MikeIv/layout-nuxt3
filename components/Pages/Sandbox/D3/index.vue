<template>
  <section class="d3 layout-useful__wrapper">
    <CommonButtonBack link="/sandbox" />
    <CommonHeader title="D3" />
    <UIALink href="https://d3js.org/" linkText="Модуль D3" class=" d3__link a-font__l">
      <nuxt-icon name="link" filled class="d3__link-icon" />
    </UIALink>


    <div id="container"></div>

  </section>

</template>

<script setup>
import * as d3 from 'd3'
import {onMounted, reactive, ref} from "vue";

import userData from '/content/dataP.json'

const data  = userData
console.log('LINK: ', data)




const dataD3 = ref()
const d3Data = reactive(dataD3)

const { listData } = testD3();
dataD3.value = listData;


onMounted(() => {
  const width = 950
  const height = Math.min(width, 700);
  const radius = Math.min(width, height) / 2;

  const arc = d3.arc()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);

  const pie = d3.pie()
      .padAngle(1 / radius)
      .sort(null)
      .value(d => d.value);

  const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  svg.append("g")
      .selectAll()
      .data(pie(data))
      .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll()
      .data(pie(data))
      .join("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .call(text => text.append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => d.data.value.toLocaleString("en-US")));


// Append the SVG element.
  container.append(svg.node());
})


</script>

<style lang="scss" scoped>
@import "d3";
</style>