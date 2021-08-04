<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    use HasFactory;
    protected $fillable = array('Employee_name', 'User_Name', 'Password', 'Contact');
    public $table = "employee";
    protected $primaryKey = "id";
    public $timestamps = false;
}
