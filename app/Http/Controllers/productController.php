<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class productController extends Controller
{
    public function AddProduct(Request $req)
    {

        DB::beginTransaction();
        try {

            $user = new products;
            $user->Product_Name = $req->product_name;
            $user->Quantity = $req->quantity;
            $user->Price = $req->Price;
            $user->save();

            DB::commit();
            return ('Added Succefully');
        } catch (\Throwable $th) {
            DB::rollBack();
            return $th;
        }
    }
    public function ProductList()
    {
        $user = products::all();
        return ($user);
    }

    public function DeleteProduct(Request $request)
    {
        // dd($request->all());
        // echo 'User Id: ' . $request->delete_user_id;
        DB::beginTransaction();
        try {
            $user = products::destroy($request);
            return redirect('Deleted successfully');
        } catch (\Throwable $th) {
            return redirect('Something Went Wrong');
        }
    }

    public function editProdyct(Request $req)
    {
        DB::beginTransaction();
        try {
            $user = products::find($req);
            $user->Product_Name = $req->product_name;
            $user->Quantity = $req->quantity;
            $user->Price = $req->Price;
            $user->save();
            DB::commit();
            return redirect('Succefully Edited');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect('Something Went Wrong');
        }
    }
}
