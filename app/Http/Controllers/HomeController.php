<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use App\Models\StuntingRecord;
use App\Models\Recipe;

class HomeController extends Controller
{
    public function index(Request $request): Response
    {
        $user = Auth::user();

        // Admin
        if ($user && $user->role === 'admin') {
            return Inertia::render('Admin/Dashboard', [ 
                'stats' => [
                    'total_users'   => User::where('role', 'user')->count(),
                    'total_records' => StuntingRecord::count(),
                    'total_recipes' => Recipe::count(),
                ],
                'recent_users' => User::where('role', 'user')->latest()->take(5)->get(),
                'recipes'      => Recipe::latest()->get(),
            ]);
        }

        // User
        return Inertia::render('Dashboard', [
        ]);
    }
}