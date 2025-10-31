export const siteConfig = {
  name: "Glassuo",
  url: "https://github.com/Mikeykitler/glassuo",
  description: "Glassuo is a fully open source AI assistant that helps you accomplish real-world tasks with ease. Through natural conversation, Glassuo becomes your digital companion for research, data analysis, and everyday challenges.",
  keywords: [
    'AI',
    'artificial intelligence',
    'browser automation',
    'web scraping',
    'file management',
    'AI assistant',
    'open source',
    'research',
    'data analysis',
  ],
  authors: [{ name: 'Glassuo Team', url: 'https://github.com/Mikeykitler/glassuo' }],
  creator: 'Glassuo Team',
  publisher: 'Glassuo Team',
  category: 'Technology',
  applicationName: 'Glassuo',
  githubUrl: 'https://github.com/Mikeykitler/glassuo',
  
  // Mobile-specific configurations
  bundleId: {
    ios: 'com.glassuo.app',
    android: 'com.glassuo.app'
  },
  
  // Theme colors
  colors: {
    primary: '#000000',
    background: '#ffffff',
    theme: '#000000'
  }
};

// React Native metadata structure (for web builds)
export const mobileMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  applicationName: siteConfig.applicationName,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: 'Glassuo - Open Source AI Agent Platform',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Glassuo - Open Source AI Agent Platform',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glassuo - Open Source AI Agent Platform',
    description: siteConfig.description,
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Glassuo - Open Source AI Agent Platform',
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    shortcut: '/favicon.png',
  },
  alternates: {
    canonical: siteConfig.url,
  },
}; 