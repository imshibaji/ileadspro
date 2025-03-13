<?php
namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Tracker extends Controller
{
    public function index()
    {
        return 'Api Tracker';
    }

    public function store(Request $request)
    {
        $gid = $request->input();
        return $gid;
    }

    public function show($id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id) {

    }
}
