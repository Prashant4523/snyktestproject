<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Test;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use App\Interfaces\ContactInterface;
use App\Interfaces\TestInterface;

class TestController extends Controller
{
    private $testInterface;

    public function __construct(TestInterface $testInterface)
    {
        $this->testInterface = $testInterface;
    }

    public function index(){
        $title = "Account";
        return Inertia::render('Test/Test',compact('title'));
    }

    public function store(Request $request){

        $this->testInterface->createTest($request);

        return Inertia::render('Test/TestList');

        // return response()->json([
        //     'success' => true,
        //     'message' => 'Test Created successfully'
        // ]);
    }

    public function getList(){
        $tests = $this->testInterface->getAllTests();
        return response()->json([
            'success' => true,
            'data' => $tests,
        ]);
        // return Inertia::render('Test/TestList');
    }

    public function contact(){
        $title = "Contact";
        return Inertia::render('Test/Contact',compact('title'));
    }
}
