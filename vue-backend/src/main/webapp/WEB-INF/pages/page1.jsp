<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

</head>
<body>
<div id="app">
    <h1>Greeting from JSP: ${greeting}</h1>
    {{ greeting }} <br>
    Email <input v-model="$v.email.$model" >
    <p>
        {{$v}}
    </p>
    <fetch-button></fetch-button>
</div>
<script src="/js/page1/index.min.js"></script>
</body>
</html>