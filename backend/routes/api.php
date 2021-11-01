<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TodosController;


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

Route::get('/index', [TodosController::class,'index']);
Route::post('/done-all-todos', [TodosController::class,'done_all_todos']);
Route::post('/del-todo', [TodosController::class,'del_todo']);
Route::post('/del-all-todos', [TodosController::class,'del_all_todos']);
Route::post('/add-todo', [TodosController::class,'add_todo']);
Route::post('/edit-todo', [TodosController::class,'edit_todo']);
