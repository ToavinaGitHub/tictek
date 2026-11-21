# TicTek — site vitrine

Site statique multipage (FR + EN) généré avec Vite et React. React sert à produire le HTML au build ; le navigateur ne reçoit qu'un script de menu (~0,3 Ko) et, sur la page Contact uniquement, le formulaire hydraté.

## Commandes

```bash
npm install
npm run dev      # http://localhost:5173 — pages rendues à la volée, mêmes URL qu'en production
npm run build    # dist/ : une page HTML par URL + 404.html, sitemap.xml, robots.txt
npm run preview  # sert dist/
npm test         # tests unitaires du formulaire (node:test)
npm run check    # parité des textes FR/EN, puis contrôles SEO/liens sur dist/ (à lancer après build)
```

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `VITE_SITE_URL` | Domaine de production sans `/` final : `https://www.tictek.mg` (dans `.env.production`). Sert aux canonical, hreflang, Open Graph, JSON-LD, sitemap et robots.txt. |
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Envoi du formulaire via l'API REST EmailJS. Identifiants publics par conception ; limitez les origines autorisées à votre domaine dans le tableau de bord EmailJS. |

## E-mails (EmailJS)

Les formulaires Contact et Nous rejoindre envoient deux e-mails :

1. **À TicTek** : le modèle existant (`VITE_EMAILJS_TEMPLATE_ID`). Dans EmailJS, son champ « To Email » doit être `contact@tictek.mg`. Il reçoit `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, `{{reason}}` et `{{message}}` : **tous les champs du formulaire sont regroupés dans `{{message}}`**, le modèle actuel n'a donc pas besoin d'être modifié.
   Champs du formulaire de contact : nom complet, e-mail professionnel, entreprise, pays, site web (facultatif), langue préférée, type de collaboration, description, budget et délai (facultatifs). Ils sont aussi envoyés séparément (`{{company}}`, `{{country}}`, `{{company_website}}`, `{{preferred_language}}`, `{{collaboration}}`, `{{budget}}`, `{{timeline}}`) pour qui voudrait un modèle plus détaillé.
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
- Conversions (envoyées uniquement après consentement, `src/client/main.js`) :
  - `generate_lead` à chaque formulaire envoyé (`form_name` = `contact` ou `careers`, plus `collaboration_type` et `preferred_language` pour le contact) : **à marquer comme conversion clé dans GA4** ;
  - `cta_click` sur les boutons d'appel à l'action, avec `cta_label` (emplacement : `hero_primary`, `model_dedicated`, `service_support`, `cta_band`…) ;
  - `request_quote` sur les boutons « Demander un devis » (page Tarifs) ;
  - `contact_email` sur tout lien `mailto:`, `contact_whatsapp`, `book_call` ;
  - `project_click` (étude de cas ou lien vers le projet), `service_click` (cartes de services) ;
  - `view_commercial_page` une fois par vue d'une page commerciale (`page_type` = home, services, outsourcing, switzerland, canada…).
- Pour ajouter un suivi : un attribut `data-track="<événement>"` (et `data-track-label`) sur le lien suffit.
- Le formulaire de contact peut être prérempli : `/contact/?type=dedicated#form` (valeurs : `dedicated`, `team`, `white-label`, `custom`, `ai-automation`, `maintenance`, `other`). `npm run check` vérifie que chaque valeur utilisée existe.
- La CSP de `vercel.json` autorise uniquement `www.googletagmanager.com`, `*.google-analytics.com` et `*.analytics.google.com`.
- Page `/confidentialite/` (`/en/privacy/`) : à tenir à jour si un nouveau service est ajouté.

## Où modifier quoi

- Textes : `src/data/locales/fr.js`, `en.js` (même structure, contrôlée par `npm run check`) ; formulaire : `src/data/locales/form.js`
- Offres (6 services), modèles de collaboration, processus, pratiques de sécurité, FAQ : clés `offers`, `models`, `process`, `security`, `faq` des locales. Aucun tarif public : ne pas en ajouter sans validation.
- Pages marché (Suisse, Canada) : `src/data/markets.js` + `src/data/locales/markets.{fr,en}.js`. Pour ajouter un pays (Royaume-Uni, États-Unis, Australie…), suivre le mode d'emploi en tête de `markets.js` ; page, sitemap, hreflang et pied de page suivent automatiquement. N'ajouter un marché qu'avec un contenu réellement spécifique.
- Études de cas : champs `origin` (`provider` = réalisé en tant que prestataire) et `caseStudy` de `src/data/projects.js`.
- Coordonnées, nom, URL des pages, logos des technologies : `src/data/site.js`
- Couleurs, typographies, espacements : variables CSS en tête de `src/styles/style.css` (`:root`)
- Réalisations : `src/data/projects.js` — la page `/realisations/` (`/en/work/`), son lien de menu, son entrée de sitemap et la section d'accueil n'apparaissent qu'à partir d'un projet renseigné.
- Pages : `src/pages/`, composants : `src/components/`, styles : `src/styles/style.css`
- Métadonnées et données structurées : `src/seo/head.js`

## Déploiement

Publier le dossier `dist/` sur n'importe quel hébergement statique. Points à vérifier :

- Servir `404.html` pour les URL inconnues (automatique sur Netlify, Cloudflare Pages, GitHub Pages).
- Redirections (`vercel.json`) : `/software-development-outsourcing-switzerland/`, `…-canada/` et `/software-development-outsourcing/` renvoient vers leurs pages `/en/…` (le français reste à la racine, l'anglais sous `/en/`).
- Rediriger `/services` vers `/services/` (comportement par défaut de la plupart des hébergeurs statiques ; sur Vercel : `"trailingSlash": true`).
- Hébergement actuel : **Vercel** (`vercel.json`) : build, redirection `/services` → `/services/`, en-têtes de sécurité et de cache. La CSP n'autorise aucun script inline.

Après la mise en ligne : déclarer `https://<domaine>/sitemap.xml` dans Google Search Console et Bing Webmaster Tools.

Les polices IBM Plex Sans et Sriracha (`public/fonts/`) sont distribuées sous licence SIL Open Font License 1.1.
