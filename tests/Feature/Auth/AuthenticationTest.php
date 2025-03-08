<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('login screen can be rendered', function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

test('users can authenticate using the login screen', function () {
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('user.dashboard', absolute: false));
});

test('users database checked logged in status', function () {
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);
    $response->assertRedirect(route('user.dashboard', absolute: false));

    // Database checked After login
    $au = Auth::user();
    $user = User::find($au->id);
    expect($user->is_login)->toBe(1);
    expect($user->total_logins)->toBe(1);
    expect($user->last_login)->not->toBeNull();
    expect($user->last_ip)->not->toBeNull();
    expect($user->last_agent)->not->toBeNull();
    expect($user->last_page)->not->toBeNull();
    expect($user->last_session)->not->toBeNull();
    expect($user->last_activity)->toBe('login');
});

test('users can not authenticate with invalid password', function () {
    $user = User::factory()->create();

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);
    $this->assertGuest();
});

test('users can logout', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/logout');

    $this->assertGuest();
    $response->assertRedirect('/');
});

test('After users logout database checked logged in status', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/logout');

    $this->assertGuest();
    $response->assertRedirect('/');

    // Database checked After Logout
    $user = User::find($user->id);
    expect($user->is_login)->toBe(0);
    expect($user->last_ip)->not->toBeNull();
    expect($user->last_agent)->not->toBeNull();
    expect($user->last_page)->not->toBeNull();
    expect($user->last_session)->not->toBeNull();
    expect($user->last_activity)->toBe('logout');
    expect($user->last_logout)->not->toBeNull();
});
