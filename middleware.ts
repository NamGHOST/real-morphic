import { NextResponse, NextRequest } from 'next/server'
import { decodeToken } from '@/lib/utils/token'
import supabase from '@/lib/supabase/client'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  try {
    const formData = await request.formData();
    const token = formData.get('3_token');
    if (!token) {
      throw new Error('Token is missing');
    }

    const user = await decodeToken(token as string);

    if (!user || !user.id) {
      throw new Error('Invalid token');
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('plan')
      .eq('user_id', user.id)
      .single()

    if (data?.plan === "free" || data?.plan === '') {
      response.headers.set('isOpen', 'false')
    } else {
      response.headers.set('isOpen', 'true')
      response.headers.set('userId', user.id as string)
    }
  } catch (error) {
    response.headers.set('isOpen', 'false')
  }

  return response
}

export const config = {
  matcher: '/search/:path*', // Apply middleware to all paths under /search
};