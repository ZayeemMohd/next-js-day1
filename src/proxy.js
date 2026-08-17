import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function proxy(request) {
  // 1. Extract the token from cookies
  const token = request.cookies.get('token')?.value;

  // 2. If no token exists, rewrite the request to our unauthorized route
  if (!token) {
    return NextResponse.rewrite(new URL('/api/v1/auth/unauthorized', request.url));
  }

  try {
    // 3. Verify the token using jose
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    
    // 4. If valid, let the request proceed to the protected API route
    return NextResponse.next();
  } catch (error) {
    // If the token is fake, altered, or expired
    return NextResponse.rewrite(new URL('/api/v1/auth/unauthorized', request.url));
  }
}

// 5. Specify which routes this proxy should protect
export const config = {
  matcher: ['/api/v1/users'], 
};