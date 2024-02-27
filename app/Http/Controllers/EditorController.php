<?php

namespace App\Http\Controllers;

use App\Models\Editor;
use FontLib\Table\Type\name;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EditorController extends Controller
{
    public function index(){
        $editor = Editor::get();
        return view('editor.index',compact('editor'));
    }
   public function login(){
 return view('editor.login');
   }
   public function EditorCreate(){
    return view('editor.create');
   }
public function store(Request $request){
$data = [
    'name' =>$request->name,
    'email' =>$request->email,
    'password' =>Hash::make($request->password),
    ];
    $model = new Editor();
    if($model->insert($data)){
        return redirect('/editor')->with('msg','Editor Update Successfully');
    }
}


   
   public function EditorAuth(Request $request){
    $euser = $request->all();
   
    if(Auth::guard('editor')->attempt(['email'=>$euser['email'],'password'=>$euser['password']])){
        return redirect()->route('editor.edashboard');
    }
    else{
        return redirect()->route('editor_login_form');
    }
}
   
   public function edashboard(){
   
    return view('editor.edashboard');
   }
   public function destroy(){
    Auth::guard('editor')->logout();
    // dd(session()->all());
    return redirect()->route('editor_login_form');
}
}
