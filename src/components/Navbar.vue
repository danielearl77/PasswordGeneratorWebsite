<template>
    <header>
        <h1>
            <img alt="" class="logo" src="@/assets/img/logo.png" width="40" height="40" />
            Password Generator
        </h1>
        
        <nav>
            <RouterLink to="/">Passwords</RouterLink>
            <RouterLink to="/">File Integrity</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
</script>

<style scoped>
    header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #124559;
        color: #ffffff;
    }
    nav {
        margin: 0 40px;
        float: right;
    }
    nav a {
        padding: 0px 20px;
        color: #ffffff;
        text-decoration: none;
    }
    h1 {
        font-family: 'PT Mono',monospace;
        margin-left: 10px;
        font-size: .875em;
        float: left;
    }
    h1 img {
        vertical-align: middle;
    }
</style>    