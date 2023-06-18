<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function registration(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        $user = User::create($request->except('password') + [
            'password' => bcrypt($request->password),
        ]);

        $data = [
            'user_id' => $user->id,
            'token' => $user->createToken('createTocket')->plainTextToken,
            'token_type' => 'Bearer',
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
