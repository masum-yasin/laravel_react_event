<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ScheduleEvent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function schedule(){
        $categories = Category::get();
        $schedule = ScheduleEvent::get();
        return Inertia::render("Schedule",[
            'schedule'=>$schedule,
            'categories'=> $categories,
        ]);
    }
}
