import { type NextRequest } from 'next/server';
import { PayloadTooLargeError, readLimitedBody } from '../../../lib/read-limited-body';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const MAX_BODY_BYTES = 256_000;

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = new TextDecoder().decode(await readLimitedBody(request, MAX_BODY_BYTES));
    const clientIp = request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-real-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      '0.0.0.0';
    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'X-Forwarded-For': clientIp,
        'X-ACR-Client-IP': clientIp,
      },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }
    return Response.json({ status: 'error' }, { status: 502 });
  }
}
