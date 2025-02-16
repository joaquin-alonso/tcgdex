TCGDex is a dashboard to analyze cards in Trading Card Games, starting with Pokemon for now.

## View it live

The project is deployed in Vercel: https://tcgdex-1wou.vercel.app/

## Running locally

First, install the dependencies:

```
npm i
```

Copy the `.default.env` file and rename it to `.env`. Inside set the value of your [Pokemon TCG Api Key](https://docs.pokemontcg.io/getting-started/authentication). This is not mandatory but recommended as the application does quite a few requests and the API has a limited quota. Otherwise I recommend commenting some of the `StatsLoader` components in the `SummaryPage`.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach and improvements

### Make it work

When I first read the instructions I thought "maybe Ash wants to play MTG later in life so I could make this work with multiple TCGs" thus I started writing the services and components as abstract and decoupled as possible. Then I saw the time it was and I had to stop 😆. There were some tools that I wanted to play a bit with so this took more than half a day, and still theres a lot of things that could be improved:

- Dashboard:
  - Add more graphs. E.g.: Select a Set and show a PieChart with the number of cards per each Supertype, and a ScatterPlot analyzing the relation between the HP and MaxDamage of the pokemons, to compare how potentially powerful each Set is
- Table page:
  - Add Pagination
  - Maybe get filter values from API
  - Add dropdown to allow more items per page and possibly data virtualization
- Summary:
  - Add more Stats related to the available Sets

### Make it right

- Improve the mobile experience and debounce the resize handler for the Charts
- Make Layout components more presentational instead of hardcoding the data
- Add a normalizer function to the Pokemon Service in case of having another TCG
- Consider using a Headless Table like `TanStack Table`
- Decouple the Table component from the Pokemon TCG or at least rename it to be more specific
- Add tests

### Make it right-er/fast

- Having to make multiple requests to generate Charts and Stats is not ideal. We should modify the API to get multiple counts at once, or at least handle concurrency when loading the data
- Implement SSR and ISR to cache pages server side for X minutes to avoid refetching and rerendering everything on reload
- Add a cache to the API
