<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TodosCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'todo_id' => $this->todo_id,
            'todo_info' => $this->todo_info,
            'todo_check' => $this->todo_check,
            'todo_complete' => $this->todo_complete
        ];
    }
}
