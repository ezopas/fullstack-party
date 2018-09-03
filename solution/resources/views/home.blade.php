@extends('layouts.app')

@section('content')
                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                        <div id="app">
                            <router-view></router-view>
                        </div>
                </div>
@endsection
