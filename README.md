## View it live

The project is deployed in Vercel:

## Running locally

First, install the dependencies:

```
npm i
```

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

## Improvements

When I first read the instructions I thought "maybe Ash wants to play MTG later in life so I could make this work with multiple TCGs" so I started writing the services and components as abstract and decoupled as possible. Then I saw the time it was and I had to stop haha. There were some tools that I wanted to play a bit with so this took more than half a day, and still theres a lot of things that could be improved:

- Make Layout components more presentational instead of hardcoding the data
- Add tests
- Add a normalizer function to the Pokemon Service in case of having another TCG
- Dashboard:
  - Add more graphics. E.g.: Select a Set and show a PieChart with the number of cards per each Supertype, and a ScatterPlot analyzing the relation between the HP and MaxDamage of the pokemons, to compare how potentially powerful each Set is.
  - Having to make multiple requests to generate 1 graph is not ideal. We should modify the API to get multiple counts at once, or at least handle concurrency when loading the data.
  - Debounce the resize handler
- Table page:
  - Add Pagination
  - Maybe get filter values from API
  - Add dropdown to allow more items per page and possibly data virtualization
  - Possibly use a Headless Table like `TanStack Table`
- Summary:
  - Having to make multiple requests to generate 1 list of Stats is not ideal. We should modify the API to get multiple counts at once, or at least handle concurrency when loading the data.
