<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Eventtype;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventBookingController extends Controller
{
    
    public function index(){
        $bookings = Booking::get();
        return view('frontend.booking.index',compact('bookings'));
    }


    public function create($id){
        $user = Auth::guard('customer')->user() ?? '' ;
        $token = csrf_token() ;
        $eventtype = Eventtype::find($id);
        $categories = Category::get();
      
        return Inertia::render('EventDetails',compact('eventtype','categories','user', 'token'));
    }
    public function store(Request $request){

            $validate = $request->validate([
            'customer_name'=>'required|min:4',
            'email'=>'required|email',
            'phone_number'=>'required|numeric',
            'member'=>'required|min:2',
            'description'=>'required|min:4',
            'address'=>'required|min:4',
           
        ]);
        // dd($request->event_category) ;
        
       
            
            $data = [
                'customer_name'=>$request->customer_name,
                'email'=>$request->email,
                'phone_number'=>$request->phone_number,
                // 'event_catalog'=>$filename,
                'member'=>$request->member,
                'description'=>$request->description,
                'address'=>$request->address,
                'event_category'=>$request->event_category,
                'customer_id' => $request->customer_id,
                'booking_price' => $request->booking_price ,
                'payment_method' => $request->payment_method,
                't_id' => $request->t_id,
                
            ];
            // dd($data) ;
            $model = new Booking();
            if($model->insert($data)){
                return back()->with('msg','Booking Inserted Successfully');
            }
        // }
    }
    public function status(Request $request,$id){
        $booking = Booking::find($id);
        $data = [
            'status'=>$request->status
        ];
        $booking->update($data);
        return back()->with('msg','status updated');
    }
public function delete($id){
    $booking = Booking::find($id);
    if($booking->delete());
    return back()->with('msg','Booking Delete Successfully');
}


}
