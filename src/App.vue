<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>Vue Form Validation</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                v-for="link in links"
                :key="`${link.label}-header-link`"
                color="white"
                text
                rounded
                class="my-2"
                :to="link.url"
            >
                {{ link.label }}
            </v-btn>
        </v-app-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
    mame: 'App',
    data: () => ({
        links: [
            { label: 'Home', url: '/' },
            { label: 'Vuetify', url: '/vuetify' },
            { label: 'Vuelidate', url: '/Vuelidate' }
        ]
    })
};
</script>

<style lang="scss"></style>
