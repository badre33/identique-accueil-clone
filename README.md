# Link Agency — site officiel

Site vitrine de Link Agency, agence marketing premium basée à Casablanca.

## Stack

- React + TypeScript
- Vite + `vite-react-ssg`
- Tailwind CSS + shadcn/ui
- Netlify (projet `linkagency1`)
- GitHub (`badre33/identique-accueil-clone`)

## Développement local

```sh
npm install
npm run dev
```

## Vérification et build

```sh
npm run lint
npm run build
```

Le build génère les pages statiques pré-rendues dans `dist/`. Les routes de
blog sont extraites du sitemap pendant le build.

## Déploiement

Le déploiement est piloté par GitHub et Netlify :

- une pull request crée un Deploy Preview ;
- un merge sur `main` déclenche le déploiement de production ;
- la configuration de build et les règles HTTP sont dans `netlify.toml` et
  `public/_redirects`.

Site de production : https://linkagency.ma
