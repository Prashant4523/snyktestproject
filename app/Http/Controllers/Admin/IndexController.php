<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(){
        $title = 'Company Details';
        return Inertia::render('Home',compact('title'));
    }

    public function category(){
        return Inertia::render('Category');
    }
}
