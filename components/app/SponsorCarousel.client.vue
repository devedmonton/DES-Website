<!--
description: This component is responsible for rendering the sponsors carousel in home page.
  it is a CLIENT component because we don't need to render it on the server side + it's better this way for performance.
-->

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const modules = [Autoplay]
</script>

<template>
  <section class="lg:-mt-24 max-w-7xl mx-auto">
    <h2 class="text-center">
      Our Sponsors and Partners
    </h2>
    <Swiper
      :space-between="50"
      :autoplay="{
        delay: 7500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :breakpoints="{
        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }"
    >
      <SwiperSlide
        v-for="slide, index in sponsors"
        :key="index"
      >
        <NuxtLink
          :title="slide.name"
          :to="slide.link"
          rel="noopener noreferrer"
        >
          <Icon
            class="w-full lg:h-32 h-full"
            :name="slide.image"
          />
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
