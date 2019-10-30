@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <input type="hidden" id="user" value="{{auth()->user()}}">
            <div id="my-react">
                
            </div>
        </div>
    </div>
</div>
@endsection
