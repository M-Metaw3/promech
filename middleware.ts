import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const { geo, url, } = request
    const country = geo?.country
    const city = geo?.city

    // Clone the request headers and set a new header `x-hello-from-middleware1`
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('country', country||'');
    requestHeaders.set('city', city||'');
    requestHeaders.set('ip', request.ip||'')

    // const newUrl = request.nextUrl.clone();
    // newUrl.searchParams.set('country', country||'EG');
    // const response = NextResponse.rewrite(newUrl);
    
    // You can also set request headers in NextResponse.rewrite
    const response = NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    });
    response.cookies.set('country', country||'EG');
    
    return response
}