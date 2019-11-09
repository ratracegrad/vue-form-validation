<template>
    <v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Login</v-card-title>
        <v-card-text>
            <form>
                <v-text-field
                    v-model="username"
                    label="Username"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
                    @blur="$v.username.$touch()"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    required
                ></v-text-field>
            </form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary">
                Login
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { required } from 
  'vuelidate/lib/validators';
export default {
    name: 'VuelidateLogin',
    validations: {
        username: { required },
        password: { required }
    },
    computed: {
        usernameErrors() {
            const errors = [];
            !this.$v.username.required 
              && errors.push('Username is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            !this.$v.password.required 
              && errors.push('Password is required');
            return errors;
        }
    },
    data: () => ({
        username: null,
        password: null
    })
};
</script>

<style scoped></style>
