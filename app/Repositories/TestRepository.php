<?php

namespace App\Repositories;

use App\Interfaces\TestInterface;
use App\Models\Test;

class TestRepository implements TestInterface
{

    /**
     * Function : Get All Tests
     * @param NA
     * @return posts
     */
    public function getAllTests()
    {
        return Test::select('name', 'print_name')->get();
    }

    /**
     * Function : Create Test
     *
     * @param [type] $request
     * @return test
     */
    public function createTest($request)
    {
        return Test::create([
            'name' => $request->companyName,
            'print_name' => $request->printName,
            'date' => $request->date
        ]);
    }

    /**
     * Function : Get Test By Id
     * @param [type] $id
     * @return test
     */
    public function getTestById($id)
    {
        return Test::find($id);
    }

    /**
     * Function : Update Test
     *
     * @param [type] $request
     * @param [type] $id
     * @return test
     */
    public function updateTest($request, $id)
    {
        $test = Test::find($id);
        if ($test) {
            $test['companyName'] = $request->companyName;
            $test['printName'] = $request->printName;
            $test['date'] = $request->date;
            $test->save();
            return $test;
        }
    }

    /**
     * Function : Delete Test
     * @param [type] $id
     * @return void
     */
    public function deleteTest($id)
    {
        $test = Test::find($id);
        if ($test) {
            return $test->delete();
        }
    }
}