<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\StuntingRecord;
use App\Models\Recipe;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_users'    => User::where('role', 'user')->count(),
                'total_records'  => StuntingRecord::count(),
                'total_recipes'  => Recipe::count(),
            ],
            'recent_users' => User::where('role', 'user')->latest()->take(5)->get(),
        ]);
    }
}