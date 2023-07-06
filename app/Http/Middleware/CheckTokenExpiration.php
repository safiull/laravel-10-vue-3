<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\HttpFoundation\Response;

class CheckTokenExpiration
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check() && Auth::user()->tokens->count() === 0) {
            throw new AuthenticationException('Unauthenticated.');
        }

        $accessToken = $request->user()->currentAccessToken();

        if ($accessToken && $accessToken->expires_at <= now()) {
            Auth::user()->tokens()->delete();
            throw new AuthenticationException('Token has expired.');
        }

        return $next($request);
    }
}
