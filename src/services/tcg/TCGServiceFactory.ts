import { TCGService } from './TCGService';
import { PokemonTCGService } from './pokemon/PokemonTCGService';

export type TCGName = 'pokemon' | 'mtg';

export class TCGServiceFactory {
  static createService(tcg: TCGName): TCGService {
    switch (tcg) {
      case 'pokemon':
        return new PokemonTCGService();
      default:
        throw new Error('Unsupported TCG');
    }
  }
}
