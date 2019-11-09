<template>
    <v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Login</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    label="Username"
                    :rules="[v => !!v || 'Username is required']"
                    required
                ></v-text-field>
                <v-text-field
                    label="Password"
                    :rules="[v => !!v || 'Password is required']"
                    type="password"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary">
                Login
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'VuetifyLogin'
};
</script>

<style scoped></style>
