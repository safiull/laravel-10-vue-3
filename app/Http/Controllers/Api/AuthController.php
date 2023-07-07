<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;
use Laravel\Sanctum\NewAccessToken;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

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

        $accessToken = $user->createToken('createToken');
        $this->setAccessTokenExpiration($accessToken);

        $data = [
            'user_id' => $user->id,
            'token_type' => 'Bearer',
            'token' => $accessToken->plainTextToken,
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

            $accessToken = $user->createToken('createToken');
            $this->setAccessTokenExpiration($accessToken);

            $data['token'] = $accessToken->plainTextToken;

            // Remove previous tokens;
            $user->tokens()->where('id', '!=', $accessToken->accessToken->id)->delete();

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

    protected function setAccessTokenExpiration(NewAccessToken $accessToken)
    {
        $expiration = now()->addMinutes(Config::get('sanctum.expiration'));

        DB::table('personal_access_tokens')
            ->where('id', $accessToken->accessToken->id)
            ->update(['expires_at' => $expiration]);
    }
}
