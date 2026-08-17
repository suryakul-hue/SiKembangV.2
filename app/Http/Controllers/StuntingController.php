<?php

namespace App\Http\Controllers;

use App\Models\StuntingRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class StuntingController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Stunting', [
            'user' => $request->user(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'child_name' => 'required|string|max:255',
            'gender'     => 'required|in:L,P',
            'age_months' => 'required|integer|min:0|max:60',
            'height'     => 'required|numeric|min:30|max:150',
            'weight'     => 'nullable|numeric|min:1|max:50',
            'z_score'    => 'nullable|numeric',
            'status'     => 'required|string|max:100',
            'notes'      => 'nullable|string',
        ]);
        $request->user()->stuntingRecords()->create($validated);

        return redirect()->route('stunting.history')->with('success', 'Hasil pemeriksaan stunting berhasil disimpan.');
    }

    public function history(Request $request): Response
    {
        $records = StuntingRecord::where('user_id', $request->user()->id)
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('StuntingHistory', [
            'history' => $records,
            'records' => $records,
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $record = StuntingRecord::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->firstOrFail();

        $record->delete();

        return redirect()->route('stunting.history')->with('success', 'Riwayat berhasil dihapus.');
    }
}