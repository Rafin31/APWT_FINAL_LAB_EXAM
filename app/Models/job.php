<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class job extends Model
{
    protected $fillable = array('Company_Name', 'Job_Title', 'Job_Location', 'Salary');
    public $table = "job";
    protected $primaryKey = "id";
    public $timestamps = false;
    use HasFactory;
}
