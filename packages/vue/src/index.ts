import { CapoPlugin, HashHydrationPlugin, createHeadCore } from 'unhead'
import { createHead, createServerHead } from './createHead'

// create
export {
  createHead,
  createServerHead,
  createHeadCore,
}

// extra plugins
export {
  CapoPlugin,
  HashHydrationPlugin,
}

// types
export * from './types'
// vue 2
export * from './VueHeadMixin'
export * from './Vue2ProvideUnheadPlugin'

// composables
export * from './autoImports'
export * from './composables/useHead'
export * from './composables/useHeadSafe'
export * from './composables/useSeoMeta'
export * from './composables/useServerHead'
export * from './composables/useServerHeadSafe'
export * from './composables/useServerSeoMeta'

export type { HeadTag, MergeHead, ActiveHeadEntry, Head, Unhead, HeadEntryOptions } from '@unhead/schema'
