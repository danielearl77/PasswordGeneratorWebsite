<template>
    <div id="footer">
        <div>&copy;2017 - {{copyDate}} Password Generator Website</div>
        <div>
            |<RouterLink to=""> Legal </RouterLink>
            |<RouterLink to=""> Passwords </RouterLink>
            |<RouterLink to=""> Integrity </RouterLink>
            |<RouterLink to=""> About </RouterLink>|
        </div>
        <div>
            <a href="https://twitter.com/GetNewPwd" target="_blank"><img src="@/assets/img/TwitterLogo.png" alt="Twitter"></a>
        </div>
    </div>
</template>

<script setup>
    const d = new Date();
    const copyDate = d.getFullYear();
</script>

<style scoped>
    #footer {
        width: 100%;
        height: 40vh;
        padding: 50px;
        background-color: #000000;
        color: #ffffff;
    }
    div {
        text-align: center;
    }
    a {
        text-decoration: none;
        color: #ffffff;
    }
</style>