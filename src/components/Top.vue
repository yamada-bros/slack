<template>
  <div class="top">
		<div class="top-menuBox">
			<div class="top-title">
				<p>Slack</p>
			</div>
			<div class="loaderBox">
				<div class="loader"></div>
			</div>
			<div class="top-button">
				<router-link :to="'SignIn'"><button>Sign in</button></router-link>
				<router-link :to="'SignUp'"><button>Sign up</button></router-link>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Sign in'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.top {
	width: 100%;
	height: 100%;
	margin: 0;
}
.top-menuBox {
	width: 50%;
	margin: auto;
	padding-top: 10%;
}
.top-title {
	font-size: 5em;
	font-family: fantasy;
	text-align: center;
}
.top-button {
  padding: 10% 0;
	text-align: center;
}
.top-button button {
	color: #fff;
	font-size: 1em;
	padding: 1%;
	margin: 0 1%;
	border-radius: 10px;
	// background-color: #BE0002;
	border-style: none;
}
.top-button button:hover {
	color: #fff;
	font-size: 1em;
	font-weight: bold;
	padding: 1%;
	border-radius: 10px;
	border-style: none;
	// background-color: #BE0002;
	cursor: pointer;
}

$colors:
  hsla(337, 84, 48, 0.75)
  hsla(160, 50, 48, 0.75)
  hsla(190, 61, 65, 0.75)
  hsla( 41, 82, 52, 0.75);
$size: 2.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: ($size - $thickness) / 2;
$offset: $lat - $thickness;

.loaderBox {

}

.loader {
  position: relative;
  width: $size;
  height: $size;
  transform: rotate(165deg);
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: $thickness;
    height: $thickness;
    border-radius: $thickness / 2;
    transform: translate(-50%, -50%);
  }
  
  &:before {
    animation: before 2s infinite;
  }
  
  &:after {
    animation: after 2s infinite;
  }
}

@keyframes before {
  0% {
    width: $thickness;
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
  35% {
    width: $size;
    box-shadow:
      0 (-$offset) nth($colors, 1),
      0   $offset  nth($colors, 3);
  }
  70% {
    width: $thickness;
    box-shadow:
      (-$lat) (-$offset) nth($colors, 1),
      $lat $offset nth($colors, 3);
  }
  100% {
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
}

@keyframes after {
  0% {
    height: $thickness;
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
  35% {
    height: $size;
    box-shadow:
        $offset  0 nth($colors, 2),
      (-$offset) 0 nth($colors, 4);
  }
  70% {
    height: $thickness;
    box-shadow:
      $offset (-$lat) nth($colors, 2),
      (-$offset) $lat nth($colors, 4);
  }
  100% {
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
}



/**
 * Attempt to center the whole thing!
 */

html,
body {
  height: 100%;
	margin: 0;
}

.loader {
  position: absolute;
  top: calc(50% - #{$size / 2});
  left: calc(50% - #{$size / 2});
}


</style>
