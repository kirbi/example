<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">


        <title>Laravel</title>
    </head>
    <body>
        <div id="app">
            <example/> <!-- komponen example diambil dari asset app.js-->
        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>