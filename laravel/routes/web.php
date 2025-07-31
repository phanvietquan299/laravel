<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AccountController;

Route::get('/api/account', [AccountController::class, 'index']);