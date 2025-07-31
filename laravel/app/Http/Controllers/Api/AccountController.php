<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Account;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        // Trả về danh sách account dưới dạng JSON
        return response()->json(Account::all());
    }
}
