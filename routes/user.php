<?php
use App\Http\Controllers\User\Activity;
use App\Http\Controllers\User\Business;
use App\Http\Controllers\User\Campaigns;
use App\Http\Controllers\User\Dashboard;
use App\Http\Controllers\User\Dialer;
use App\Http\Controllers\User\Emails;
use App\Http\Controllers\User\Leads;
use App\Http\Controllers\User\Purchase;
use App\Http\Controllers\User\Sms;
use App\Http\Controllers\User\Users;
use App\Http\Controllers\User\WhatsApp;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])
->prefix('user')->name('user.')
->group(function () {
    Route::get('dashboard', [Dashboard::class, 'index'])->name('dashboard');
    Route::resource('campaigns', Campaigns::class);
    Route::get('leads', [Leads::class, 'index'])->name('leads');
    Route::get('dialer', [Dialer::class, 'index'])->name('dialer');
    Route::get('emails', [Emails::class, 'index'])->name('emails');
    Route::get('sms', [Sms::class, 'index'])->name('sms');
    Route::get('whatsapp', [WhatsApp::class, 'index'])->name('whatsapp');
    Route::get('business', [Business::class, 'index'])->name('business');
    Route::get('users', [Users::class, 'index'])->name('users');
    Route::get('activity', [Activity::class, 'index'])->name('activity');
    Route::get('purchase',[Purchase::class, 'index'])->name('purchase');
});
