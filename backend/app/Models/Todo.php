<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'todo_info','todo_check', 'todo_complete'
    ];
    protected $primaryKey = 'todo_id';
    protected $table = 'tbl_todos';

}
