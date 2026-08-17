<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(Request $request): Response
    {
        // Menampilkan halaman Dashboard Inertia (resources/js/Pages/Dashboard.jsx)
        return Inertia::render('Dashboard', [
            'user' => $request->user(),
        ]);
    }
}