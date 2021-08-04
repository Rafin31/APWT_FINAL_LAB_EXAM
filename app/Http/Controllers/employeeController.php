<?php

namespace App\Http\Controllers;


use App\Models\employee;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class employeeController extends Controller
{

    public function AddEmployee(Request $req)
    {
        //return $req->hello;

        DB::beginTransaction();
        try {
            echo $req;
            $user = new employee;
            $user->Employee_Name = $req->employee_name;
            $user->User_Name = $req->user_name;
            $user->Company_Name = $req->company_name;
            $user->Contact =  $req->contact;
            $user->Password =  $req->password;
            $user->save();

            DB::commit();
            return ["Result" => "Added Succefully"];
        } catch (\Throwable $th) {
            DB::rollBack();
            return $th;
        }
    }

    public function employeeList()
    {
        $user = employee::all();
        return ($user);
    }

    public function DeleteEmployee(Request $request)
    {
        // dd($request->all());
        // echo 'User Id: ' . $request->delete_user_id;
        DB::beginTransaction();
        try {
            $user = employee::destroy($request->delete_user_id);
            return redirect('Deleted successfully');
        } catch (\Throwable $th) {
            return redirect('Something Went Wrong');
        }
    }

    public function editEmployee(Request $req)
    {
        DB::beginTransaction();
        try {
            $user = employee::find(session("user_id"));
            $user->User_Name = $req->user_name;
            $user->Name = $req->name;
            $user->Contact = $req->contact;
            $user->Password =  $req->password;
            $user->save();
            DB::commit();
            return redirect('Succefully Edited');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect('Something Went Wrong');
        }
    }

    public function SearchEmployee(Request $req)
    {
        $user = employee::find($req);
        return ($user);
    }
}
