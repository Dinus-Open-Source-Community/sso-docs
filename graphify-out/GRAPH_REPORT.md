# Graph Report - sso-docs  (2026-08-26)

## Corpus Check
- 22 files · ~13,383 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 154 nodes · 157 edges · 19 communities (13 shown, 6 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- compilerOptions
- package.json
- POST /token
- dependencies
- Developer Console
- Authorization Code Flow
- include
- Auth API — `/api/auth/*`
- next.config.js
- next-env.d.ts
- GET /check-session
- theme.config.tsx
- ssoauth.New
- ssoauth.NewState
- Integrasi Ruby (Rails / Sinatra)
- Integrasi Rust
- Integrasi C# (.NET)
- Integrasi Java
- Avatar — `POST /api/avatar`

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `Auth API — `/api/auth/*`` - 11 edges
3. `Integrasi Ruby (Rails / Sinatra)` - 10 edges
4. `Integrasi Rust` - 9 edges
5. `Integrasi C# (.NET)` - 8 edges
6. `Integrasi Java` - 7 edges
7. `POST /token` - 7 edges
8. `Developer Console` - 7 edges
9. `scripts` - 5 edges
10. `GET /authorize` - 5 edges

## Surprising Connections (you probably didn't know these)
- `league/oauth2-client (PHP)` --semantically_similar_to--> `ssoauth Go Package`  [INFERRED] [semantically similar]
  pages/integration/php.mdx → pages/integration/go.mdx
- `sso-docs Docs Service` --conceptually_related_to--> `DOSCOM SSO`  [INFERRED]
  docker-compose.yml → pages/index.mdx
- `Client.AuthorizeURL` --references--> `GET /authorize`  [INFERRED]
  pages/integration/go.mdx → pages/endpoints.mdx
- `Client.Exchange` --references--> `POST /token`  [INFERRED]
  pages/integration/go.mdx → pages/endpoints.mdx
- `POST /revoke` --conceptually_related_to--> `Developer Console`  [INFERRED]
  pages/endpoints.mdx → pages/developer-console.mdx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Authorization Code Flow Endpoints** — pages_endpoints_authorize_endpoint, pages_endpoints_token_endpoint, pages_endpoints_userinfo_endpoint, pages_endpoints_token_refresh_endpoint [EXTRACTED 1.00]
- **Local id_token Verification via JWKS** — pages_endpoints_jwks_endpoint, pages_integration_go_client_verifyidtoken, pages_integration_php_firebase_php_jwt, pages_integration_python_authlib [INFERRED 0.85]
- **DOSCOM SSO OAuth 2.0/OIDC Client Libraries** — pages_integration_go_ssoauth, pages_integration_nodejs_openid_client, pages_integration_php_league_oauth2_client, pages_integration_python_authlib [INFERRED 0.85]

## Communities (19 total, 6 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.11
Nodes (18): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, incremental (+10 more)

### Community 1 - "package.json"
Cohesion: 0.12
Nodes (15): devDependencies, @types/node, @types/react, typescript, name, private, scripts, build (+7 more)

### Community 2 - "POST /token"
Cohesion: 0.17
Nodes (15): User Management API Endpoints, GET /authorize, Rate Limiting, POST /revoke, POST /token, POST /token/refresh, GET /userinfo, access_token (JWT RS256) (+7 more)

### Community 3 - "dependencies"
Cohesion: 0.18
Nodes (11): next, nextra, nextra-theme-docs, dependencies, next, nextra, nextra-theme-docs, react (+3 more)

### Community 4 - "Developer Console"
Cohesion: 0.31
Nodes (9): Admin — Kelola User, Role Hierarchy (super_admin/admin/member), client_secret shown only once, Developer Console, Redirect URI Rules, Confidential Client, PKCE, Public Client (+1 more)

### Community 5 - "Authorization Code Flow"
Cohesion: 0.22
Nodes (14): sso-docs Docs Service, GET /.well-known/jwks.json, GET /.well-known/openid-configuration, Authorization Code Flow, id_token (JWT RS256), DOSCOM SSO, OAuth 2.0, OpenID Connect (OIDC) (+6 more)

### Community 6 - "include"
Cohesion: 0.29
Nodes (6): next-env.d.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 7 - "Auth API — `/api/auth/*`"
Cohesion: 0.17
Nodes (11): Autentikasi, Auth API — `/api/auth/*`, Format Response, GET /api/auth/me 🔒, GET /api/auth/verify-email, Objek User, POST /api/auth/change-password 🔒, POST /api/auth/forgot-password (+3 more)

### Community 14 - "Integrasi Ruby (Rails / Sinatra)"
Cohesion: 0.18
Nodes (10): Auth API & Avatar, Environment Variables, Handler Callback, Handler Login, Instalasi, Integrasi Ruby (Rails / Sinatra), Logout & Revoke, Refresh Token (+2 more)

### Community 15 - "Integrasi Rust"
Cohesion: 0.20
Nodes (9): Ambil Profil dari /userinfo, Auth API & Avatar, Environment Variables, Handler Callback — Tukar Code, Handler Login, Instalasi, Integrasi Rust, Refresh Token (+1 more)

### Community 16 - "Integrasi C# (.NET)"
Cohesion: 0.22
Nodes (8): Ambil Profil dari /userinfo, Auth API & Avatar, Environment Variables, Handler Callback — Tukar Code, Handler Login, Integrasi C# (.NET), Refresh Token, Setup

### Community 17 - "Integrasi Java"
Cohesion: 0.25
Nodes (7): Ambil Profil dari /userinfo, Auth API & Avatar, Environment Variables, Handler Callback — Tukar Code, Handler Login, Integrasi Java, Setup Client

### Community 18 - "Avatar — `POST /api/avatar`"
Cohesion: 0.50
Nodes (3): Avatar — `POST /api/avatar`, Contoh, POST /api/avatar 🔒

## Knowledge Gaps
- **93 isolated node(s):** `withNextra`, `name`, `version`, `private`, `dev` (+88 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `POST /token` connect `POST /token` to `Authorization Code Flow`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `withNextra`, `name`, `version` to the rest of the system?**
  _93 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._