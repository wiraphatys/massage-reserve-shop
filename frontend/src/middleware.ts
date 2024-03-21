import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

    const isLoggedIn = request.cookies.get("token")?.value

    // ถ้าผู้ใช้ยังไม่ล็อคอิน ให้เด้งไปยังหน้าแรก
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/', request.url));
    } else {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/reservations/:path*',
}
