<template>
    <v-card class="mx-auto mt-10" max-width="600">
        <v-card-title>Register</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    label="Email"
                    :rules="emailRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Password"
                    :rules="passwordRules"
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
export default {
    name: 'VuetifyRegister',
    data: () => ({
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 5) || 'Password must have 5+ characters',
            v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
            v => /(?=.*\d)/.test(v) || 'Must have one number',
            v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
        ]
    })
};
</script>

<style scoped></style>
