# Graph Report - sso-docs  (2026-08-26)

## Corpus Check
- Corpus is ~3,943 words - fits in a single context window. You may not need a graph.

## Summary
- 100 nodes · 109 edges · 14 communities (8 shown, 6 thin omitted)
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- TypeScript Config
- Package Dependencies
- OAuth Endpoints & Flows
- Nextra Docs Framework
- Client Auth & PKCE
- OpenID Connect & JWTs
- Next.js Types Ref
- Docs Overview & Docker
- Next Config
- Next Env Types
- Session Endpoints
- Theme Config
- Go SSO Auth
- Go SSO Auth State

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `POST /token` - 7 edges
3. `Developer Console` - 7 edges
4. `scripts` - 5 edges
5. `Authorization Code Flow` - 5 edges
6. `PKCE` - 5 edges
7. `GET /authorize` - 5 edges
8. `lib` - 4 edges
9. `include` - 4 edges
10. `DOSCOM SSO` - 4 edges

## Surprising Connections (you probably didn't know these)
- `sso-docs Docs Service` --conceptually_related_to--> `DOSCOM SSO`  [INFERRED]
  docker-compose.yml → pages/index.mdx
- `league/oauth2-client (PHP)` --semantically_similar_to--> `ssoauth Go Package`  [INFERRED] [semantically similar]
  pages/integration/php.mdx → pages/integration/go.mdx
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
- **DOSCOM SSO OAuth 2.0/OIDC Client Libraries** — pages_integration_go_ssoauth, pages_integration_nodejs_openid_client, pages_integration_php_league_oauth2_client, pages_integration_python_authlib [INFERRED 0.85]
- **Local id_token Verification via JWKS** — pages_endpoints_jwks_endpoint, pages_integration_go_client_verifyidtoken, pages_integration_php_firebase_php_jwt, pages_integration_python_authlib [INFERRED 0.85]

## Communities (14 total, 6 thin omitted)

### Community 0 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, incremental (+10 more)

### Community 1 - "Package Dependencies"
Cohesion: 0.12
Nodes (15): devDependencies, @types/node, @types/react, typescript, name, private, scripts, build (+7 more)

### Community 2 - "OAuth Endpoints & Flows"
Cohesion: 0.17
Nodes (15): User Management API Endpoints, GET /authorize, Rate Limiting, POST /revoke, POST /token, POST /token/refresh, GET /userinfo, access_token (JWT RS256) (+7 more)

### Community 3 - "Nextra Docs Framework"
Cohesion: 0.18
Nodes (11): next, nextra, nextra-theme-docs, dependencies, next, nextra, nextra-theme-docs, react (+3 more)

### Community 4 - "Client Auth & PKCE"
Cohesion: 0.31
Nodes (9): Admin — Kelola User, Role Hierarchy (super_admin/admin/member), client_secret shown only once, Developer Console, Redirect URI Rules, Confidential Client, PKCE, Public Client (+1 more)

### Community 5 - "OpenID Connect & JWTs"
Cohesion: 0.33
Nodes (9): GET /.well-known/jwks.json, GET /.well-known/openid-configuration, id_token (JWT RS256), Client.VerifyIDToken, ssoauth Go Package, getSSOClient, openid-client (Node.js), firebase/php-jwt (+1 more)

### Community 6 - "Next.js Types Ref"
Cohesion: 0.29
Nodes (6): next-env.d.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 7 - "Docs Overview & Docker"
Cohesion: 0.60
Nodes (5): sso-docs Docs Service, Authorization Code Flow, DOSCOM SSO, OAuth 2.0, OpenID Connect (OIDC)

## Knowledge Gaps
- **51 isolated node(s):** `withNextra`, `name`, `version`, `private`, `dev` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Config` to `Next.js Types Ref`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `POST /token` connect `OAuth Endpoints & Flows` to `OpenID Connect & JWTs`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Nextra Docs Framework` to `Package Dependencies`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **What connects `withNextra`, `name`, `version` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._