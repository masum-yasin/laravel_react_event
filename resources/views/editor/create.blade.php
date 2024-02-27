@extends('backend.layouts.app')
@section('content')
    <div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">
				
				<!-- Default Basic Forms Start -->
				<div class="pd-20 card-box mb-30">
					<div class="clearfix">
                        <a href="{{route('editor.index')}}" class="btn btn-sm btn-success mb-3" style="float: right">Editor List</a>
						<div class="pull-left">
							<h4 class="text-blue h4">Editor Authencation</h4>
					</div>
					</div>
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{$error}}</li>
                            @endforeach
                        </ul>
                    </div>
                        
                    @endif
                    @if (session('msg'))
                    <div class="alert alert-success">
                        {{session('msg')}}
                    </div>                        
                    @endif
					<form method="post" action="{{route('editor.store')}}" >
                        @csrf
						<div class="form-group row">
						<label class="col-sm-12 col-md-2 col-form-label">User Name</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control" type="text" placeholder="User Name" name="name" value="{{old('name')}}">
							</div>
						</div>
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">User Email</label>
                                <div class="col-sm-12 col-md-10">
                                    <input class="form-control" type="email" placeholder="User Email" name="email" value="{{old('email')}}">
                                </div>
                            </div>
                            {{-- Category Section --}}
                          
                           
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Event Location</label>
                                <div class="col-sm-12 col-md-10">
                                    <input class="form-control" type="password" placeholder="User Password" name="password">
                                </div>
                            </div>
						

						
						<div class="row mb-3 w-50">
							<label class="col-sm-12 col-md-2 col-form-label"></label>
							<div class="col-sm-12 col-md-10">
								<button type="submit" class="form-control" style="margin-left:90px">Submit</button>
							</div>
						</div>
					</form>
					
					</div>
				</div>
		

			</div>
		
		</div>

@endsection