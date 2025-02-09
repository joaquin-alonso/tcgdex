import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ game: string }> }
) {
  const game = (await params).game;
  const searchParams = request.nextUrl.searchParams;

  switch (game) {
    case 'pokemon':
      const API_URL = 'https://api.pokemontcg.io/v2/cards';
      const API_KEY = process.env.POKEMON_API_KEY || '';
      const res = await fetch(`${API_URL}?${searchParams.toString()}`, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      const data = await res.json();
      return Response.json(data);
    default:
      return new Response(`Unsupported TCG: ${game}`, {
        status: 400,
      });
  }
}
