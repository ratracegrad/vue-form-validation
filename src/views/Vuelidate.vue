<template>
    <v-card mt-5 class="fill-height">
        <v-tabs v-model="tab" centered>
            <v-tab>Login</v-tab>
            <v-tab>Register</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <VuelidateLogin></VuelidateLogin>
            </v-tab-item>

            <v-tab-item>
                <VuelidateRegister></VuelidateRegister>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import VuelidateLogin from '@/components/VuelidateLogin';
import VuelidateRegister from '@/components/VuelidateRegister';
export default {
    name: 'Vuetify',
    components: {
        VuelidateLogin,
        VuelidateRegister
    },
    data: () => ({
        tab: null
    })
};
</script>

<style scoped></style>
