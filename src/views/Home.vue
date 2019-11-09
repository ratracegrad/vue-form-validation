<template>
    <v-container fill-height>
        <v-row text-center>
            <v-col>
                <v-card class="ma-auto" max-width="600">
                    <v-img
                        :src="require('../assets/logo.png')"
                        contain
                        height="300"
                    ></v-img>
                    <v-card-title class="justify-center display-2">
                        Vue Form Validation
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'home'
};
</script>
