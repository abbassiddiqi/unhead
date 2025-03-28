import { describe, it } from 'vitest'
import { createHead, setHeadInjectionHandler, useHead } from '@unhead/vue'
import { renderDOMHead } from '@unhead/dom'
import { useDom } from '../../fixtures'

describe('vue events', () => {
  it('basic', async () => {
    const head = createHead()
    setHeadInjectionHandler(() => head)

    useHead({
      bodyAttrs: {
        onresize: () => {},
      },
    })

    useHead({
      bodyAttrs: {
        onresize: () => {},
      },
    })

    const dom = useDom()

    await renderDOMHead(head, { document: dom.window.document })

    expect(dom.serialize()).toMatchInlineSnapshot(`
      "<!DOCTYPE html><html><head>

      </head>
      <body data-h-resize="">

      <div>
      <h1>hello world</h1>
      </div>



      </body></html>"
    `)
  })
})
