<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body class="welcome">
        <div class="text-center">
            <h1 class="welcome-title">testio<span>.</span></h1>
            <a class="welcome-link" href="{{ url('login/github') }}">Login With Github</a>
        </div>

    </body>
</html>
