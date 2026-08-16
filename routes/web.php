<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('SiKembang');
});

Route::get('/stunting', function () {
    return Inertia::render('Stunting');
});

Route::get('/tablet-routine', function () {
    return Inertia::render('Hemoglobin/index');
})->name('tablet-routine.index');
Route::get('/login', function () {
    return 'Halaman Login Sementara';
})->name('login');

Route::get('/register', function () {
    return 'Halaman Register Sementara';
})->name('register');

Route::get('/dashboard', function () {
    return 'Halaman Dashboard Sementara';
})->name('dashboard');