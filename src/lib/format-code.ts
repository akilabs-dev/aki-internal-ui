import * as prettier from 'prettier/standalone'
import * as pluginBabel from 'prettier/plugins/babel'
import * as pluginEstree from 'prettier/plugins/estree'
import * as pluginHtml from 'prettier/plugins/html'
import * as pluginPostcss from 'prettier/plugins/postcss'
import * as pluginTypescript from 'prettier/plugins/typescript'
import { formatHtml } from '@/lib/format-html'

const vuePlugins = [
  pluginEstree,
  pluginBabel,
  pluginHtml,
  pluginPostcss,
  pluginTypescript,
]

const prettierOptions = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
} as const

export async function formatVueSource(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      ...prettierOptions,
      parser: 'vue',
      plugins: vuePlugins,
    })
  } catch {
    return code.trim()
  }
}

export async function formatHtmlSource(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      tabWidth: 2,
      printWidth: 80,
      parser: 'html',
      plugins: [pluginHtml],
    })
  } catch {
    return formatHtml(code)
  }
}

export async function formatCssSource(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      ...prettierOptions,
      parser: 'css',
      plugins: [pluginPostcss],
    })
  } catch {
    return code.trim()
  }
}

export async function formatJavascriptSource(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      ...prettierOptions,
      parser: 'babel',
      plugins: [pluginEstree, pluginBabel],
    })
  } catch {
    return code.trim()
  }
}
