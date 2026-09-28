export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Autional',
    legalName: 'Autional',
    url: 'https://www.autional.cn',
    logo: 'https://www.autional.cn/logo-mark.svg',
    description: '企业级身份与访问管理（IAM）平台 —— 认证、SSO、MFA、多租户、审计与开发者 API。',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'support@autional.net',
    },
    sameAs: [
      'https://github.com/autional-cn',
      'https://twitter.com/autional',
      'https://www.linkedin.com/company/autional',
    ],
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Autional',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '299',
      priceCurrency: 'USD',
      offerCount: '3',
    },
    description: '企业级身份与访问管理（IAM）平台，为 AI 生成的应用提供 SSO、MFA、多租户、审计合规与开发者 API。',
  };
}
