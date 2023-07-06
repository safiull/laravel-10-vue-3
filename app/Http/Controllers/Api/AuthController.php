<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:4',
        ]);

        $user = User::create($request->except('password') + [
            'password' => bcrypt($request->password),
        ]);

        $data = [
            'user_id' => $user->id,
            'token_type' => 'Bearer',
            'token' => $user->createToken('createTocket')->plainTextToken,
            'expires_at' => now()->addMinutes(Config::get('session.lifetime')),
        ];

        return response()->json([
            'data' => $data,
            'message' => 'Registration Successfully.'
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (auth()->attempt($request->only('email', 'password'))) {
            $user = auth()->user();
            $data['name'] = $user->name;
            $data['email'] = $user->email;
            $data['token'] = $user->createToken('createToken')->plainTextToken;
            $data['expires_at'] = now()->addMinutes(Config::get('session.lifetime'));

            return response()->json([
                'data' => $data,
                'message' => 'Logged in successfully!',
            ]);
        } else {
            return response()->json([
                'message' => 'Invalid email or password!'
            ], 404);
        }
    }
}
