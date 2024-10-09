<template>
    <v-bottom-navigation class="custom-navigation">
        <v-btn v-if="$route.name !== 'login' && $route.name !== 'secondLogin'" @click="logout()" value="logout" :active="false">
            <v-icon>mdi-logout</v-icon>
            <span>logout</span>
        </v-btn>

        <v-btn @click="navigateTo('information')" value="info" :active="false">
            <v-icon>mdi-information</v-icon>
            <span>information</span>
        </v-btn>
</v-bottom-navigation>
</template>

<script>
    export default {
        name: 'recBottomNavigation',
        methods: {
            navigateTo(routeName) {
                this.$router.push({ name: routeName }).then(() => {
                    this.resetActive();
                });
            },
            logout() {
                localStorage.removeItem("authenticated");
                localStorage.removeItem("secondAuthenticated");
                this.$router.push({ name: "login" });
            },
            resetActive() {
                // Force update of active state by resetting focus
                this.$nextTick(() => {
                    document.activeElement.blur();
                });
            }
        }
    }
</script>

<style scoped>
    .custom-navigation {
        background-color: rgb(0,170,162);
    }

    .v-icon {
        color: #1E292F;
    }
</style>
