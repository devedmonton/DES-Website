<template>
  <div class="flex flex-col justify-between min-h-screen">
    <the-menu />
    <nuxt class="mb-auto pt-24 pb-4" />
    <the-footer />
    <banner
      v-if="showBoardBanner"
      name="BoardBanner"
      message="We're recruiting for the 2021-24 board! Find out more!"
      shortMsg="We're recuiting for our board"
      link="/contact"
      buttonText="Contact Us"
    />
  </div>
</template>

<script>
import TheFooter from "~/components/TheFooter";
import TheMenu from "~/components/TheMenu";
import Banner from "~/components/Banner";

export default {
  components: {
    TheFooter,
    TheMenu,
    Banner
  },
  data: function () {
    return {
      showBoardBanner: null,
    };
  },
  mounted: function () {
    this.showBoardBanner =
      window.sessionStorage.getItem("BoardBanner") !== "false";
  },
};
</script>

<style>
html {
  box-sizing: border-box;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-radius: 4px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid #35495e;
  border-radius: 4px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
