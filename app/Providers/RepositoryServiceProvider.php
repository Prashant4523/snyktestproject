<?php

namespace App\Providers;

use App\Interfaces\ContactInterface;
use Illuminate\Support\ServiceProvider;
use App\Interfaces\TestInterface;
use App\Repositories\ContactRepository;
use App\Repositories\TestRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // Bind Interface and Repository class together
        $this->app->bind(TestInterface::class, TestRepository::class);
        $this->app->bind(ContactInterface::class, ContactRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
