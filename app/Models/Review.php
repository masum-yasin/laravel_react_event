<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'review_title','descripation','rating','status','occupation',
    ];

    public function Review(): BelongsTo
    {
        return $this->belongsTo(Customer::class,'customer_id');
    }
}
