# TicTek — site vitrine

Site statique multipage (FR + EN) généré avec Vite et React. React sert à produire le HTML au build ; le navigateur ne reçoit qu'un script de menu (~0,3 Ko) et, sur la page Contact uniquement, le formulaire hydraté.

## Commandes

```bash
npm install
npm run dev      # http://localhost:5173 — pages rendues à la volée, mêmes URL qu'en production
npm run build    # dist/ : une page HTML par URL + 404.html, sitemap.xml, robots.txt
npm run preview  # sert dist/
npm test         # tests unitaires du formulaire (node:test)
npm run check    # contrôles SEO/liens sur dist/ (à lancer après build)
```

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `VITE_SITE_URL` | Domaine de production sans `/` final : `https://www.tictek.mg` (dans `.env.production`). Sert aux canonical, hreflang, Open Graph, JSON-LD, sitemap et robots.txt. |
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Envoi du formulaire via l'API REST EmailJS. Identifiants publics par conception ; limitez les origines autorisées à votre domaine dans le tableau de bord EmailJS. |

## E-mails (EmailJS)

Les formulaires Contact et Nous rejoindre envoient deux e-mails :

1. **À TicTek** : le modèle existant (`VITE_EMAILJS_TEMPLATE_ID`). Dans EmailJS, son champ « To Email » doit être `contact@tictek.mg`. Il reçoit `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, `{{reason}}` et `{{message}}` (tous les champs y sont regroupés).
2. **Accusé de réception au visiteur** (facultatif) : créer un second modèle dans EmailJS → Email Templates, puis renseigner son ID dans `VITE_EMAILJS_CONFIRM_TEMPLATE_ID`.
   - To Email : `{{to_email}}`
   - From Name : `TicTek` — Reply To : `contact@tictek.mg`
   - Subject : `{{subject}}`
   - Content : `{{message}}`

   Le texte (FR ou EN selon la langue du visiteur) vient de `src/data/locales/form.js` (`confirmation`). Il ne contient jamais de texte saisi par le visiteur, pour que le formulaire ne puisse pas servir à envoyer du contenu arbitraire.

Chaque envoi consomme donc deux e-mails du quota EmailJS. Pensez à activer la limite de fréquence (Account → Security) et à restreindre les domaines autorisés.

## Mesure d'audience (Google Analytics 4)

- ID dans `.env.production` : `VITE_GA_ID=G-YV8X9STGH9`. Vide = ni bannière ni Analytics.
- Consentement (`src/client/consent.js`, mode Consent Mode v2 « basique ») : aucun script Google n'est chargé avant « Accepter ». Choix mémorisé 6 mois, modifiable via « Gérer les cookies » dans le pied de page. Publicité et signaux Google désactivés, cookies limités à 13 mois.
- Conversion : événement `generate_lead` (`form_name` = `contact` ou `careers`) à chaque formulaire envoyé.
- La CSP de `vercel.json` autorise uniquement `www.googletagmanager.com`, `*.google-analytics.com` et `*.analytics.google.com`.
- Page `/confidentialite/` (`/en/privacy/`) : à tenir à jour si un nouveau service est ajouté.

## Où modifier quoi

- Textes : `src/data/locales/fr.js`, `en.js` ; formulaire : `src/data/locales/form.js`
- Coordonnées, nom, URL des pages, logos des technologies : `src/data/site.js`
- Thème clair / sombre : variables CSS en tête de `src/styles/style.css` (`:root` et `:root[data-theme="dark"]`)
- Réalisations : `src/data/projects.js` — la page `/realisations/` (`/en/work/`), son lien de menu, son entrée de sitemap et la section d'accueil n'apparaissent qu'à partir d'un projet renseigné.
- Pages : `src/pages/`, composants : `src/components/`, styles : `src/styles/style.css`
- Métadonnées et données structurées : `src/seo/head.js`

## Déploiement

Publier le dossier `dist/` sur n'importe quel hébergement statique. Points à vérifier :

- Servir `404.html` pour les URL inconnues (automatique sur Netlify, Cloudflare Pages, GitHub Pages).
- Rediriger `/services` vers `/services/` (comportement par défaut de la plupart des hébergeurs statiques ; sur Vercel : `"trailingSlash": true`).
- Hébergement actuel : **Vercel** (`vercel.json`) : build, redirection `/services` → `/services/`, en-têtes de sécurité et de cache. La CSP autorise le script de thème inline par son empreinte SHA-256 ; le build échoue si ce script change sans mise à jour de `vercel.json`.

Après la mise en ligne : déclarer `https://<domaine>/sitemap.xml` dans Google Search Console et Bing Webmaster Tools.

La police Plus Jakarta Sans (`public/fonts/`) est distribuée sous licence SIL Open Font License 1.1.
