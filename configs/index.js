const os = require('os');

const ENV = process.env.NODE_ENV || 'dev'

function getPort() {
  return {
    dev: 9092,
    development: 12610,
    aliyunqa: 12610,
    aliyunqa1: 12610,
    aliyunqa2: 12610,
    aliyunqa3: 12610,
    pre: 12610,
    production: 12610
  }[ENV]
}

const localIp = () => {
  const ip = []
  const allNwIntf = os.networkInterfaces()
  Object.keys(allNwIntf).map((intf) => {
    allNwIntf[intf].map((it) => {
      if (it.family === 'IPv4' && !it.internal) {
        ip.push(it.address)
      }
    })
  })
  return ip
}

function getHost() {
  return {
    dev: `${localIp()[0]}`,
    development: '0.0.0.0',
    aliyunqa: '0.0.0.0',
    aliyunqa1: '0.0.0.0',
    aliyunqa2: '0.0.0.0',
    aliyunqa3: '0.0.0.0',
    pre: '0.0.0.0',
    production: '0.0.0.0',
  }[ENV]
}

function getServerHost() {
  return {
    dev: `${localIp()[0]}`,
    development: '0.0.0.0',
    aliyunqa: '0.0.0.0',
    aliyunqa1: '0.0.0.0',
    aliyunqa2: '0.0.0.0',
    aliyunqa3: '0.0.0.0',
    pre: '0.0.0.0',
    production: '0.0.0.0',
  }[ENV]
}

function getServerPort() {
  return {
    dev: 9093,
    development: 9093,
    aliyunqa: 9093,
    aliyunqa1: 9093,
    aliyunqa2: 9093,
    aliyunqa3: 9093,
    pre: 9093,
    production: 9093
  }[ENV]
}

module.exports = {
  port: getPort(),
  host: getHost(),
  autoOpenBrowser: true,
  assetsPublicPath: '/',
  assetsSubDirectory: 'static',
  serverHost: getServerHost(),
  serverPort: getServerPort()
}
