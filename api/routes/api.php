<?php

use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::Post('register',[RegisterController::class,'register'])->name('register');
Route::Post('register',[RegisterController::class,'register'])->name('register');

Route::Post('login',[RegisterController::class,'login'])->name('login');

Route::middleware('auth:sanctum')->group(function(){
    Route::get('user',[RegisterController::class,'user'])->name('user');
    Route::Post('logout',[RegisterController::class,'logout'])->name('logout');
});


