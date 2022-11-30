<?php

namespace App\Interfaces;

interface TestInterface
{
    public function getAllTests();
    public function createTest($request);
    public function getTestById($testId);
    public function updateTest($request, $testId);
    public function deleteTest($testId);
}