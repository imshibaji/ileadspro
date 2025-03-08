<?php
use App\Http\Controllers\Admin\Activity;
use App\Http\Controllers\Admin\Campaigns;
use App\Http\Controllers\Admin\Clients;
use App\Http\Controllers\Admin\Dashboard;
use App\Http\Controllers\Admin\Dialer;
use App\Http\Controllers\Admin\Emails;
use App\Http\Controllers\Admin\Leads;
use App\Http\Controllers\Admin\Sms;
use App\Http\Controllers\Admin\Users;
use App\Http\Middleware\AdminCheck;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', AdminCheck::class])
->prefix('admin')->name('admin.')
->group(function () {
    Route::get('dashboard', [Dashboard::class, 'index'])->name('dashboard');
    Route::get('campaigns', [Campaigns::class, 'index'])->name('campaigns');
    Route::get('leads', [Leads::class, 'index'])->name('leads');
    Route::get('dialer', [Dialer::class, 'index'])->name('dialer');
    Route::get('emails', [Emails::class, 'index'])->name('emails');
    Route::get('sms', [Sms::class, 'index'])->name('sms');
    Route::get('clients', [Clients::class, 'index'])->name('clients');
    Route::get('users', [Users::class, 'index'])->name('users');
    Route::get('activity', [Activity::class, 'index'])->name('activity');
});
