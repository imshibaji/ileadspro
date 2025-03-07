<?php
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

require __DIR__.'/admin.php';
require __DIR__.'/user.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
