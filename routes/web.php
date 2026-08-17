<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\FacebookController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ReminderController;
use App\Http\Controllers\StuntingController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\HemoglobinController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('SiKembang', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/hemoglobin', [HemoglobinController::class, 'index'])->name('hemoglobin.index');
Route::get('/education', [EducationController::class, 'index'])->name('education.index');

/*
|--------------------------------------------------------------------------
| Guest Authentication Routes (Login, Register & OAuth)
|--------------------------------------------------------------------------
*/
Route::middleware('guest')->group(function () {
    // Login
    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');

    // Register Manual
    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'register']);

    // Google OAuth
    Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('auth.google');
    Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('auth.google.callback');

    // Facebook OAuth
    Route::get('/auth/facebook', [FacebookController::class, 'redirect'])->name('auth.facebook');
    Route::get('/auth/facebook/callback', [FacebookController::class, 'callback'])->name('auth.facebook.callback');
});

/*
|--------------------------------------------------------------------------
| Protected Routes (Login Required)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified'])->group(function () {
    
    // 👉 ROUTE LOGOUT DITAMBAHKAN DI SINI
    Route::post('/logout', function (Request $request) {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    })->name('logout');

    // 1. Dashboard Utama
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');

    // 2. Setup Biodata Awal (Orang Tua & Anak)
    Route::get('/biodata-setup', function () {
        return Inertia::render('Auth/BiodataSetup'); 
    })->name('biodata.setup');

    Route::post('/biodata-setup', function (Request $request) {
        $request->validate([
            'gender'       => 'required|in:laki-laki,perempuan',
            'child_name'   => 'required|string|max:255',
            'child_dob'    => 'required|date',
            'child_gender' => 'required|in:L,P',
        ]);

        DB::table('users')->where('id', Auth::id())->update([
            'gender'       => $request->gender,
            'child_name'   => $request->child_name,
            'child_dob'    => $request->child_dob,
            'child_gender' => $request->child_gender,
            'updated_at'   => now(),
        ]);

        return redirect()->route('dashboard');
    })->name('biodata.update');

    // 3. Stunting
    Route::get('/stunting/check', [StuntingController::class, 'index'])->name('stunting.check');
    Route::post('/stunting/store', [StuntingController::class, 'store'])->name('stunting.store');
    Route::get('/stunting/riwayat', [StuntingController::class, 'history'])->name('stunting.history');
    Route::get('/stunting/{stuntingRecord}', [StuntingController::class, 'show'])->name('stunting.show');
    Route::delete('/stunting/{stuntingRecord}', [StuntingController::class, 'destroy'])->name('stunting.destroy');

    // 4. Recipes - User Access
    Route::get('/recipes', [RecipeController::class, 'index'])->name('recipes.index');
    Route::get('/recipes/{recipe}', [RecipeController::class, 'show'])->name('recipes.show');

    // 5. Profile Management
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // 6. Reminder Widget Dashboard
    Route::post('/reminder/tablet-darah', [ReminderController::class, 'update'])->name('reminder.tablet-darah.update');
});

/*
|--------------------------------------------------------------------------
| Admin Protected Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/recipes-admin', [RecipeController::class, 'adminIndex'])->name('recipes.admin');
    Route::get('/recipes/create', [RecipeController::class, 'create'])->name('recipes.create');
    Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');
    Route::get('/recipes/{recipe}/edit', [RecipeController::class, 'edit'])->name('recipes.edit');
    Route::put('/recipes/{recipe}', [RecipeController::class, 'update'])->name('recipes.update');
    Route::delete('/recipes/{recipe}', [RecipeController::class, 'destroy'])->name('recipes.destroy');
});