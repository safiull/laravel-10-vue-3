<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
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
        $token = auth()->user()->tokens->last();
        if ($token) {
            if ($token && $token->expires_at <= now()) {
                $token->delete();
                return response()->json('Token has expired.', 401);
            }
        } else {
            return response()->json('Token not available.', 401);
        }

        return $next($request);
    }
}
