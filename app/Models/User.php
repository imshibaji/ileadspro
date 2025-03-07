<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function assignRole($role)
    {
        $this->role = $role;
        $this->save();
    }

    public function hasRole($role)
    {
        return $this->role === $role;
    }

    public function isAdmin()
    {
        return $this->hasRole('admin');
    }

    public function isUser()
    {
        return $this->hasRole('user');
    }

    public function assignStatus($status)
    {
        $this->status = $status;
        $this->save();
    }

    public function hasStatus($status)
    {
        return $this->status === $status;
    }

    public function isActive()
    {
        return $this->hasStatus('active');
    }

    public function isInactive()
    {
        return $this->hasStatus('inactive');
    }

    public function isDeleted()
    {
        return $this->hasStatus('deleted');
    }

    public function isBanned()
    {
        return $this->hasStatus('banned');
    }

    public function isSuspended()
    {
        return $this->hasStatus('suspended');
    }

    public function loggedIn(){
        $this->last_login = now();
        $this->last_ip = request()->ip();
        $this->last_agent = request()->header('User-Agent');
        $this->last_page = request()->url();
        $this->last_session = request()->session()->getId();
        $this->total_logins = $this->total_logins + 1;
        $this->is_login = true;
        $this->save();
    }

    public function loggedOut(){
        $this->last_login = now();
        $this->last_ip = request()->ip();
        $this->last_agent = request()->header('User-Agent');
        $this->last_page = request()->url();
        $this->last_session = request()->session()->getId();
        $this->is_login = false;
        $this->save();
    }

    public function setLastActivity($activity)
    {
        $this->last_activity = $activity;
        $this->save();
    }
}
