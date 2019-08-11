<template>
	<div id="app">
		<v-app>
			<Toolbar/>
            <Body/>
		</v-app>
	</div>
</template>

<script>
import Body from './components/Body.vue'
import Toolbar from './components/Toolbar.vue'

export default {
	name: 'app',
	components: {
		Body,
        Toolbar,
    },
    created () {
      this.$vuetify.theme.dark = false
    }
}
</script>
