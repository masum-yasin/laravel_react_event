<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    use HasFactory;
    // protected $primaryKey = 'id';
    protected $fillable = [
        'customer_name','email','phone_number','event_category','description','member','address','status','customer_id','eventtype_id','booking_price','payment_method','t_id'
    ];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class,'event_category');
    }



}
