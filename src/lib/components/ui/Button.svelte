<script>
	let { onclick, btnText, btnSize = "var(--size-1)" } = $props();
</script>

<!-- NOISE DISTORTION MAP -->
<svg style="position: absolute; width: 0; height: 0" aria-hidden="true">
	<defs>
		<filter id="sketchy-filter">
			<!-- 1. Generate digital noise -->
			<feTurbulence
				id="feT"
				type="fractalNoise"
				baseFrequency="0.04"
				numOctaves="3"
				result="noise"
			/>

			<!-- 2. Use that noise to warp the HTML element -->
			<feDisplacementMap
				id="diMap"
				in="SourceGraphic"
				in2="noise"
				scale="5"
				xChannelSelector="R"
				yChannelSelector="G"
			/>
		</filter>
	</defs>
</svg>

<button {onclick} style="--btnSize: {btnSize};">{btnText}</button>

<style>
	button {
        --btnSize: var(--size-1);
		padding: 0.5em 1.5em;
		background-color: transparent;
		color: var(--clr-light);
        position: relative;
        /* outline: transparent; */
        border: none;
		&:hover {
			scale: 1.01;
		}
        &:active {
            scale: 0.99;
        }
        font-size: var(--btnSize);
	}

	button::after {
		content: '';
		color: inherit;
		border: 0.2em solid;
		border-radius: 0.5em;
		filter: url(#sketchy-filter);
		position: absolute;
		inset: 0;
	}
</style>
