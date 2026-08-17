<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    /**
     * Menampilkan form pendaftaran
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Memproses pendaftaran manual
     */
    public function register(Request $request): RedirectResponse
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'age'      => 'required|integer|min:10|max:120',
            'phone'    => 'required|string|max:20',
            'email'    => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name'     => $request->name,
            'age'      => $request->age,
            'phone'    => $request->phone,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('biodata.setup');
    }
}