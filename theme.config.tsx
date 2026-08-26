import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>DOSCOM SSO</span>,
  docsRepositoryBase: 'https://github.com/Dinus-Open-Source-Community/sso-docs',
  footer: {
    text: `DOSCOM SSO Dokumentasi · ${new Date().getFullYear()}`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – DOSCOM SSO',
    }
  },
}

export default config
