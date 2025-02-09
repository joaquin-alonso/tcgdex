import { TCGService, CardsResponse, CardsSearchParams } from '../TCGService';

export class PokemonTCGService implements TCGService {
  private API_URL = '/api/tcg/pokemon/cards';

  async searchCards<PokemonCard>({
    page,
    pageSize,
    orderBy,
    q,
  }: CardsSearchParams): Promise<CardsResponse<PokemonCard>> {
    const response = await fetch(
      `${this.API_URL}?${new URLSearchParams({
        ...(typeof page === 'number' && { page: page.toString() }),
        ...(typeof pageSize === 'number' && { pageSize: pageSize.toString() }),
        ...(orderBy && { orderBy }),
        ...(q && { q }),
      }).toString()}`
    );
    const data = await response.json();
    return data;
  }
}
