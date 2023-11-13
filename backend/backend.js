const http = require('node:http')

function generateDataSeriesResponse() {
  let t0 = 1701385200000
  let N = 501
  let dt = 3600000
  let dataPoints =
    (new Array(N))
      .fill(0)
      .reduce(({ data, i }, x) => ({ data: data.concat(i), i: i + 1 }), { data: [], i: 0 })
      .data
      .reduce(({ c1, c2, c3, c4, data }, x) => {
        let elm = {
          t: new Date(t0 + x * dt),
          v1: Math.max(0, c1 - 25 + Math.round(Math.random() * 50)),
          v2: Math.max(0, c2 - 100 + Math.round(Math.random() * 200)),
          v3: Math.max(0, c3 - 250 + Math.round(Math.random() * 500)),
          v4: Math.max(0, c4 - 500 + Math.round(Math.random() * 1000))
        }

        return {
          data: data.concat(elm),
          c1: elm.v1,
          c2: elm.v2,
          c3: elm.v3,
          c4: elm.v4
        }
      }, { c1: 50, c2: 200, c3: 500, c4: 1000, data: [] })
      .data

  return { statusCode: 200, body: JSON.stringify(dataPoints), contentType: 'application/json' }
}

function generateBracketsResponse() {
  function generateChunk() {
    let rnd = Math.random()
    let type = '['
    if (rnd < 0.25) {
      type = '{'
    }
    else if (rnd < 0.5) {
      type = '('
    }
    else if (rnd < 0.75) {
      type = '<'
    }
    return {
      type,
      innerChunks: []
    }
  }

  function generateBrackets(n, chunks) {
    if (n >= 200) {
      return chunks
    }

    let rnd = Math.random()
    if (rnd < 0.5) {
      // add beside last chunk
      chunks[chunks.length - 1].innerChunks = chunks[chunks.length - 1].innerChunks.concat(generateChunk())

    } else {
      chunks = chunks.concat(generateChunk())
      // add inside last chunk
    }
    return generateBrackets(n + 1, chunks)
  }

  function chunkToString(chunk) {
    const bracketTypes = {
      '{': '}',
      '[': ']',
      '(': ')',
      '<': '>'
    }

    let inner = chunk.innerChunks.map(chunkToString).join('')

    return chunk.type + inner + bracketTypes[chunk.type]
  }
  let brackets =
    (new Array(8).fill(0)).map(() => generateBrackets(0, [generateChunk()]).map(chunkToString).join(''))

  let corruptSequences = brackets.map(x => {
    let i = Math.random() * x.length / 2
    return x.substring(0, i) + x.substring(i + 1)
  })

  return { statusCode: 200, body: JSON.stringify(corruptSequences), contentType: 'application/json' }
}

function notFoundResponse() {
  return { statusCode: 404, body: '<h1>404: File not found</h1>', contentType: 'text/html' }
}


function generateMenuItems() {
  const mockMenuItems = [
    {
      name: 'Brackets',
      path: 'brackets',
      module: 'brackets',
      state: {
        title: 'Brackets'
      }
    },
    {
      name: 'Charts',
      path: 'charts',
      module: 'charts',
      state: { title: 'Charts' }
    }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(mockMenuItems),
    contentType: 'application/json'
  }
}


const endpoints = {
  '/brackets': generateBracketsResponse,
  '/data-series': generateDataSeriesResponse,
  '/menu-items': generateMenuItems,
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  let endpoint = endpoints[req.url] ?? notFoundResponse
  let responseData = endpoint()

  res.writeHead(responseData.statusCode, {
    'Content-Type': responseData.contentType,
  })
  res.end(responseData.body)
})

server.listen(8000, '0.0.0.0', () => {
  console.log('server has started on 0.0.0.0:8000')
})
