<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'Admin\IndexController@index')->name('admin.index');
Route::get('/category', 'Admin\IndexController@category')->name('admin.category');

// Route::get('/', function () {
//     return Inertia::render('Home');
// });

// Route::get('/category', function () {
//     return Inertia::render('Category');
// });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


