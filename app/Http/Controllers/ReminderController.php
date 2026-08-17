<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReminderController extends Controller
{
    /**
     * Tampilkan halaman pengingat / tablet darah
     */
    public function index()
    {
        return Inertia::render('Hemoglobin/index');
    }

    /**
     * Simpan jadwal / status reminder
     */
    public function store(Request $request)
    {
        // Logika simpan reminder jika ada
        return back()->with('success', 'Pengingat berhasil diperbarui');
    }
}