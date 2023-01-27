<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use Illuminate\Http\Request;

class queueController extends Controller
{
    
     /**
     * Inserting of records
     *
     * @param Request $request
     * @return void
     */
    function store(Request $request) 
    {
        $queue = new queue();

        $queue->queueNum = $request->queueNum;
        $queue ->qType = $request->qType;
        $queue ->qStatus = $request->qStatus;

        $queue->save();

        return $queue;
    }

    /**
     * Showing all values
     *
     * @return void
     */
    function index() 
    {
        //Select * from employee
        return queue::all();
    }

    /**
     * Update function
     *
     * @param Request $request
     * @param [type] $id
     * @return void
     */
    function update(Request $request, $id)
    {
        $queue = Employee::find($id);

        $queue->queueNum = $request->queueNum;
        $queue->qStatus = $request->qStatus;

        $queue->save();

        return $queue;
    }

    /**
     * Deleting a record
     *
     * @param [type] $id
     * @return void
     */
    // function destroy($id)
    // {
    //     //Delete from Employee where id = $id
    //     $employee = Employee::find($id);

    //     $employee->delete();

    //     return "Deleted an employee";
    // }

    /**
     * Showing 1 record
     *
     * @param [type] $id
     * @return void
     */
    function show($id)
    {
        //Select * from employee where id = $id
        return queue::find($id);
    }

}
