<template>
    <b-container fluid class="footer">
        <nav>
            <a href="#">GitHub</a> |
            <a href="#">Blog</a>
        </nav>
        <p>
            <span>대표 : 김현수, 고다혜</span><br>
            <span>주소 : 대전 유성구 동서대로 98-39</span><br>
            <span>Copyright 2023. ssafy. All Rights Reserved.</span><br>
        </p>
    </b-container>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style>
    .footer {
        /* background-image: url('/public/unicorn.jpeg'); */
        width: 100%;
        height: 110px;
        bottom: 0px;
        position: absolute;
        border-top: 1px solid aliceblue;
        padding-top: 15px;
        font-size: 11px;
    }

    .footer a {
        display: inline-block;
        margin: 0 20px 10px 20px;
        font-size: 11px;
        text-decoration-line: none;
    }

    .footer a:visited {
        color: #808080;
    }

    .footer p {
        margin-top: 0; 
        margin-bottom: 0;   
    }

    .footer p span {
        display: inline-block;
        margin-left: 20px;
    }
</style>