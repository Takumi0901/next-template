const withOffline = require('next-offline')
const path = require('path')
const withPlugins = require('next-compose-plugins')

require('dotenv').config()

const plugins = [
  [
    {
      webpack(config, options) {
        config.resolve.alias = {
          ...config.resolve.alias,
          src: path.resolve(__dirname, './src')
        }

        return config
      }
    }
  ]
]

if (process.env.NODE_ENV === 'production') {
  plugins.push([
    withOffline,
    {
      workboxOpts: {
        swDest: 'service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'https-calls',
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }
  ])
}

module.exports = withPlugins(plugins)
