<template lang="html">
  <div>
    <ul class="tabs group" style="margin-right:200px">
      <li class="active"><a href="#one">Terminología Legal</a></li>
  	  <li><a href="#two">CONTACTO</a></li>
  	  <li><a href="#three">MISIÓN</a></li>
  	  <li><a href="#three">VISIÓN</a></li>
  	</ul>
    <div id="contentm">
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style lang="css">

  #contentm {
    margin-right: auto;
    margin-left: auto;
    background: linear-gradient(to left, rgba(215,0,0,0), rgba(250,250,250,0.5) 6%, rgba(255,250,250,0.5) 75%, rgba(215,0,0,0) 100%);
    height: 150px;
    margin-top: -3.2vh;
    width: 80vw;
  }

  .group:before,
  .group:after {
      content: "";
      display: table;
  }
  .group:after {
      clear: both;
  }
  .group {
      zoom: 1;
  }

  #content {
    min-height: 400px;
  }

  .tabs {
    display: list-item;
    list-style: none;
    margin: 60px auto 0;
    width: 700px;
  }
  .tabs li {
    /* Makes a horizontal row */
    float: left;

    /* So the psueudo elements can be
       abs. positioned inside */
    position: relative;
  }
  .tabs a {
    /* Make them block level
       and only as wide as they need */
    float: left;
    padding: 10px 40px;
    text-decoration: none;

    /* Default colors */
    color: black;
    background: #ddc385;

    /* Only round the top corners */
    -webkit-border-top-left-radius: 15px;
    -webkit-border-top-right-radius: 15px;
    -moz-border-radius-topleft: 15px;
    -moz-border-radius-topright: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .tabs .active {
    /* Highest, active tab is on top */
    z-index: 3;
  }
  .tabs .active a {
    /* Colors when tab is active */
    background: #FAFAFA;
    color: black;
  }
  .tabs li:before, .tabs li:after,
  .tabs li a:before, .tabs li a:after {
    /* All pseudo elements are
       abs. positioned and on bottom */
    position: absolute;
    bottom: 0;
  }
  /* Only the first, last, and active
     tabs need pseudo elements at all */
  .tabs li:last-child:after,   .tabs li:last-child a:after,
  .tabs li:first-child:before, .tabs li:first-child a:before,
  .tabs .active:after,   .tabs .active:before,
  .tabs .active a:after, .tabs .active a:before {
    content: "";
  }
  .tabs .active:before, .tabs .active:after {
    background: white;

    /* Squares below circles */
    z-index: 1;
  }
  /* Squares */
  .tabs li:before, .tabs li:after {
    /* background: #ddc385; */
    /* width: 10px;
    height: 10px; */
  }
  .tabs li:before {
    left: -10px;
  }
  .tabs li:after {
    right: -10px;
  }
  /* Circles */
  .tabs li a:after, .tabs li a:before {
    width: 20px;
    height: 20px;
    /* Circles are circular */
    -webkit-border-radius: 10px;
    -moz-border-radius:    10px;
    border-radius:         10px;
    /* background: #FAFAFA; */

    /* Circles over squares */
    z-index: 2;
  }
  .tabs .active a:after, .tabs .active a:before {
    /* background: #ddc385; */
  }
  /* First and last tabs have different
     outside color needs */
  .tabs li:first-child.active a:before,
  .tabs li:last-child.active a:after {
    /* background: #FAFAFA; */
  }
  .tabs li a:before {
    left: -20px;
  }
  .tabs li a:after {
    right: -20px;
  }
</style>
