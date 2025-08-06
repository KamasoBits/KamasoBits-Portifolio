
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/kamaso-bit-portifolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kamaso-bit-portifolio"
  },
  {
    "renderMode": 2,
    "route": "/kamaso-bit-portifolio/about"
  },
  {
    "renderMode": 2,
    "route": "/kamaso-bit-portifolio/packages"
  },
  {
    "renderMode": 2,
    "route": "/kamaso-bit-portifolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/kamaso-bit-portifolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/kamaso-bit-portifolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24031, hash: 'c3a3e5effbbd044f20634129c866458f64e2359031a23d4f4ff9e7ee46927c1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17216, hash: '0b9cf8d3c00a7d60e12b3097b0e03a4db819ca093d1122e8ad0c24e41c40b439', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38997, hash: '90b6bf16afb05803f9c15f1f403312fea6437ce6eb80bc2bcf1e0dee3b153909', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 40811, hash: '348bcb6cff45228d00a73fe9c8b9bd38b3505db9d324b2cc0cf4ce4e5d28b6dc', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 37786, hash: '2954d214d942b4b391c3e5e39c3d84bf617e79218019abe4f9c960ec80b2f9e9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67294, hash: 'a97ef7fe9c8e9a39e1d60f3c21a2e0538e56a0635ebb0bc0cb5fe6fde178bbd6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38143, hash: '8ae50ae9206289c0d57fa16d7bddd945c788e71261896a7e540bae0ce91021ae', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-SMJHQKIF.css': {size: 81016, hash: 'kPUs1Yw5fRM', text: () => import('./assets-chunks/styles-SMJHQKIF_css.mjs').then(m => m.default)}
  },
};
