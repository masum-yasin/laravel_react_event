<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostBlog extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_name','image','category_id','location','description'
    ];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id');
    }
}
