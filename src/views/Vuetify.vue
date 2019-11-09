<template>
    <v-card mt-5 class="fill-height">
        <v-tabs v-model="tab" centered>
            <v-tab>Login</v-tab>
            <v-tab>Register</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <VuetifyLogin></VuetifyLogin>
            </v-tab-item>

            <v-tab-item>
                <VuetifyRegister></VuetifyRegister>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import VuetifyLogin from '@/components/VuetifyLogin';
import VuetifyRegister from '@/components/VuetifyRegister';
export default {
    name: 'Vuetify',
    components: {
        VuetifyLogin,
        VuetifyRegister
    },
    data: () => ({
        tab: null
    })
};
</script>

<style scoped></style>
