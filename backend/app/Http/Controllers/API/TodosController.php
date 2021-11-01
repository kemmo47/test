<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Resources\TodosCollection;

class TodosController extends Controller
{
    public function home_laravel(){
        $title="Hello World";
        return view('layout')->with(compact('title'));
    }

    public function index(){
        $todos = Todo::get();
        return TodosCollection::collection($todos);
    }

    public function done_all_todos(Request $req){
        foreach($req->params as $par){
            if($par['todo_check'] === 1){
                Todo::where('todo_id', $par['todo_id'])->update(['todo_complete' => 1]);
            }
        }

        $todos = Todo::get();
        return TodosCollection::collection($todos);
    }

    public function del_todo(Request $req){
        Todo::where('todo_id', $req->id)->delete();
        $todos = Todo::get();
        return TodosCollection::collection($todos);
    }

    public function del_all_todos(Request $req){
        foreach ($req->params as $par){
            Todo::where('todo_id', $par['todo_id'])->delete();
        }
        $todos = Todo::get();
        return TodosCollection::collection($todos);
    }

    public function add_todo(Request $req){
        $todo = new Todo;
        $todo->todo_info = $req->info;
        $todo->todo_check = 0;
        $todo->todo_complete = 0;
        $todo->save();

        $todos = Todo::get();
        return TodosCollection::collection($todos);
    }

    public function edit_todo(Request $req){
        $todo_info = $req->params['info'];
        $todo_id = $req->params['id'];
        Todo::where('todo_id', $todo_id)->update(['todo_info' => $todo_info]);
        
        $todos = Todo::get();
        return TodosCollection::collection($todos);
    }
}
