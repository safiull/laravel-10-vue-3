<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('test', function() {
    $user = auth()->user();
    // $user->currentAccessToken()->delete();
    return 'done';
});

Route::get('/{path}', function () {
    return view('dashboard');
})->where('path', '(.*)');

require __DIR__.'/auth.php';
