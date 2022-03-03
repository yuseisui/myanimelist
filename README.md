# myanimelist

## `myanimelist.tsv`

This dataset contains animes that I have watched completely and rated. This file
has the following columns:

1. `anime_id`: [MyAnimeList](https://myanimelist.net/) ID of the anime.
1. `name`: Full name of the anime.
1. `rating`: Rating between 1 and 10.

## Format `myanimelist.tsv`

```bash
deno run --allow-read --allow-write format.ts
```
