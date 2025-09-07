
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/kamasobits/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kamasobits"
  },
  {
    "renderMode": 2,
    "route": "/kamasobits/about"
  },
  {
    "renderMode": 2,
    "route": "/kamasobits/packages"
  },
  {
    "renderMode": 2,
    "route": "/kamasobits/projects"
  },
  {
    "renderMode": 2,
    "route": "/kamasobits/contact"
  },
  {
    "renderMode": 2,
    "route": "/kamasobits/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24021, hash: '7d74c50af672b257a2b3787ed1b0251d367cef8afb49f510f157a18c2a4ab08b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17206, hash: '3d32d1eeb6c9a33b8cd831f0d32cc56f7aa26b466cef39c4aac94a7fd5c77b44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38943, hash: '65d574ce9157d36f4762ab679738c9108d0307b0acc9aefc1fc2fb0bff6d1934', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 40691, hash: '14ee4cddfd263fa92be0ef976a02156af74a3ec821667782326694d93a67a6ed', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38128, hash: '27766811fdfdd69cac19807bc4e27a7e2645510936f4ceb95246aa2ce8ced6db', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 37747, hash: '14858cfb6e63e2fc5b9a4a0aaec45b29b3674044f73793b80ca544c46d66fec9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67317, hash: '2bfae186a9dea0e20cd40af250a54d287ccbaa3e14cb31c97573cf00edf9f8b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SMJHQKIF.css': {size: 81016, hash: 'kPUs1Yw5fRM', text: () => import('./assets-chunks/styles-SMJHQKIF_css.mjs').then(m => m.default)}
  },
};
