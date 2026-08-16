<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class FacebookController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function callback()
    {
        try {
            $facebookUser = Socialite::driver('facebook')->user();
            $facebookEmail = $facebookUser->getEmail() ?? ($facebookUser->getId() . '@facebook.placeholder');

            $existingUser = User::where('facebook_id', $facebookUser->getId())
                ->orWhere('email', $facebookEmail)
                ->first();

            $isNewUser = false;

            if ($existingUser) {
                $existingUser->forceFill([
                    'name' => $facebookUser->getName() ?? $existingUser->name,
                    'avatar' => $facebookUser->getAvatar() ?? $existingUser->avatar,
                    'facebook_id' => $facebookUser->getId(),
                    'email_verified_at' => $existingUser->email_verified_at ?? now(),
                ])->save();

                $user = $existingUser;
            } else {
                $isNewUser = true;
                $user = User::create([
                    'name' => $facebookUser->getName(),
                    'email' => $facebookEmail,
                    'facebook_id' => $facebookUser->getId(),
                    'avatar' => $facebookUser->getAvatar(),
                    'email_verified_at' => now(),
                    'password' => Hash::make(uniqid()),
                ]);
            }

            Auth::login($user, true);

            return $isNewUser
                ? redirect()->route('biodata.setup')
                : redirect()->route('dashboard');

        } catch (\Exception $e) {
            return redirect()->route('login')->with('error', 'Gagal login dengan Facebook: ' . $e->getMessage());
        }
    }
}
