<template>
  <div id="hamburger" class="border-1 border-[#1f3c74] px-2 py-1 rounded-4px">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
/* hamburger menu start */
.header-nav #hamburger {
  cursor: pointer;
}
.header-nav #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #1f3c74;
  display: block;
  -webkit-transition: 0.33s;
  transition: 0.33s;
  margin-left: 0;
}
.header-nav #hamburger span:nth-child(1) {
  width: 12px;
}
.header-nav #hamburger span:nth-child(2) {
  width: 24px;
}
.header-nav #hamburger span:nth-child(3) {
  width: 12px;
}
.header-nav .display-menu #hamburger span:nth-child(1) {
  -webkit-transform: rotate(45deg) translate(2px, 1px);
  transform: rotate(45deg) translate(2px, 1px);
}
.header-nav .display-menu #hamburger span:nth-child(2) {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.header-nav .display-menu #hamburger span:nth-child(3) {
  -webkit-transform: rotate(45deg) translate(6px, -9px);
  transform: rotate(45deg) translate(6px, -9px);
}
/* hamburger menu end */
</style>
