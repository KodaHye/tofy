<template>
    <b-container fluid class="container-box">
        <b-container fluid class="square">
            <b-row class="text-center" style="height: 20%;">
                <b-col align-self="center" style="font-size: 30px;">tofy</b-col>
            </b-row>
            <b-row>
                <b-col style="padding-left: 25px;">ID</b-col>
                <div class="w-100"></div>
                <b-col><b-form-input placeholder="Enter ID"></b-form-input></b-col>
            </b-row>
            <b-row style="height: 40px;"></b-row>
            <b-row>
                <b-col style="padding-left: 25px;">Password</b-col>
                <div class="w-100"></div>
                <b-col><b-form-input placeholder="Enter Password"></b-form-input></b-col>
            </b-row>
            <b-row class="text-center" style="padding-top: 90px;">
                <b-col align-self="center" style="font-size: 20px;">
                    <a class="login-btn" href="#">login</a>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
export default {
    name: 'TheLogin',
}
</script>

<style>
.container-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.square {
    width: 40vw;
    height: 60vh;
    background-color: white;
    border-radius: 5%;
}

.login-btn {
    color: black;
}

.login-btn:hover {
    color: black;
    border-top: solid;
    animation: alternate-reverse;
    text-decoration-line: none;
}
</style>