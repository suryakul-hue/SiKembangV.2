<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RecipeController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Recipes/Index', [
            'user' => $request->user(),
        ]);
    }

    public function show($recipe): Response
    {
        return Inertia::render('Recipes/Show', [
            'recipeId' => $recipe,
        ]);
    }

    public function adminIndex(Request $request): Response
    {
        return Inertia::render('Admin/Recipes/Index', [
            'user' => $request->user(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Recipes/Create');
    }

    public function store(Request $request)
    {
        return redirect()->route('recipes.admin')->with('success', 'Resep berhasil ditambahkan.');
    }

    public function edit($recipe): Response
    {
        return Inertia::render('Admin/Recipes/Edit', [
            'recipeId' => $recipe,
        ]);
    }

    public function update(Request $request, $recipe)
    {
        return redirect()->route('recipes.admin')->with('success', 'Resep berhasil diperbarui.');
    }

    public function destroy($recipe)
    {
        return redirect()->route('recipes.admin')->with('success', 'Resep berhasil dihapus.');
    }
}