
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/KamasoBits-Portifolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/KamasoBits-Portifolio"
  },
  {
    "renderMode": 2,
    "route": "/KamasoBits-Portifolio/about"
  },
  {
    "renderMode": 2,
    "route": "/KamasoBits-Portifolio/packages"
  },
  {
    "renderMode": 2,
    "route": "/KamasoBits-Portifolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/KamasoBits-Portifolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/KamasoBits-Portifolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24151, hash: '5073533700e37848baf7955ef2c9ce22a85019a47fe817c575c63c81cbf32006', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17336, hash: 'e08a5397f94073b200aa410cf0412443d12bbca9276ae29378fc8f4d367306c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 67092, hash: '8193c2069cac0ae89f506610ec8b5cd140196fea93bdcd8f932912f51303176d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 39117, hash: '06bf766f11262c0c6e8f211e520f4e5bebb98dae1ad750c02f5dd83680818321', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38263, hash: '547ff4dbdbc24f2a3952b7c3bac5c6bda2dfeff1837a3ead99a3dee12ac23595', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 37906, hash: 'ac1aa2d69af830d4c3cff7fc8f6251252dc9805702e183fdc93dcb56d4eaa162', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 40609, hash: '8aad791a6dc57f619e3fd8674e2af7b28d6a4a0c90f9af91bc14806d73c01dc1', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'styles-SMJHQKIF.css': {size: 81016, hash: 'kPUs1Yw5fRM', text: () => import('./assets-chunks/styles-SMJHQKIF_css.mjs').then(m => m.default)}
  },
};
