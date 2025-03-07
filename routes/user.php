<?php
use App\Http\Controllers\User\Activity;
use App\Http\Controllers\User\Campaigns;
use App\Http\Controllers\User\Clients;
use App\Http\Controllers\User\Dashboard;
use App\Http\Controllers\User\Dialer;
use App\Http\Controllers\User\Emails;
use App\Http\Controllers\User\Leads;
use App\Http\Controllers\User\Sms;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])
->prefix('user')->name('user.')
->group(function () {
    Route::get('dashboard', [Dashboard::class, 'index'])->name('dashboard');
    Route::get('campaigns', [Campaigns::class, 'index'])->name('campaigns');
    Route::get('leads', [Leads::class, 'index'])->name('leads');
    Route::get('dialer', [Dialer::class, 'index'])->name('dialer');
    Route::get('emails', [Emails::class, 'index'])->name('emails');
    Route::get('sms', [Sms::class, 'index'])->name('sms');
    Route::get('clients', [Clients::class, 'index'])->name('clients');
    Route::get('activity', [Activity::class, 'index'])->name('activity');
});
