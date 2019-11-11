<template>
    <v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Register</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="email"
                    label="Email"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    error-count="5"
                    type="password"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary">
                Register
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
    name: 'VuelidateRegister',
    validations: {
        email: { required, email },
        password: {
            required,
            minLength: minLength(5)
        }
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push('Must be valid e-mail');
            !this.$v.email.required && errors.push('E-mail is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('Password is required');
            !this.$v.password.minLength &&
                errors.push('Password must have 5+ characters');
            !/(?=.*[A-Z])/.test(this.password) &&
                errors.push('Must have one uppercase character');
            !/(?=.*\d)/.test(this.password) &&
                errors.push('Must have one number');
            !/([!@$%])/.test(this.password) &&
                errors.push('Must have one special character [!@#$%]');
            return errors;
        }
    },
    data: () => ({
        email: null,
        password: null
    })
};
</script>

<style scoped></style>
