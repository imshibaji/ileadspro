<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Campaigns extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            ['id' => 1, 'name' => "1st Campaign", 'status' => 'active', 'date' => '21th Feb'],
            ['id' => 2, 'name' => "2nd Campaign", 'status' => 'active', 'date' => '21th Feb'],
            ['id' => 3, 'name' => "3rd Campaign", 'status' => 'active', 'date' => '21th Feb'],
            ['id' => 4, 'name' => "4th Campaign", 'status' => 'active', 'date' => '21th Feb'],
        ];
        return inertia('user/campaign/campaigns', [
            'budgets'=> 5000,
            'views' => 50000,
            'clicks' => 1000,
            'leads' => 100,
            'campaigns' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('user/campaign/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
