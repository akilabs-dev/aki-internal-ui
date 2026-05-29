const prettierOptions = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
} as const

export async function formatVueSource(code: string): Promise<string> {
  try {
    const [
      { format },
      pluginEstree,
      pluginBabel,
      pluginHtml,
      pluginPostcss,
      pluginTypescript,
    ] = await Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/estree'),
      import('prettier/plugins/babel'),
      import('prettier/plugins/html'),
      import('prettier/plugins/postcss'),
      import('prettier/plugins/typescript'),
    ])

    return await format(code, {
      ...prettierOptions,
      parser: 'vue',
      plugins: [
        pluginEstree.default,
        pluginBabel.default,
        pluginHtml.default,
        pluginPostcss.default,
        pluginTypescript.default,
      ],
    })
  } catch {
    return code.trim()
  }
}

export async function formatHtmlSource(code: string): Promise<string> {
  try {
    const [{ format }, pluginHtml] = await Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/html'),
    ])

    return await format(code, {
      tabWidth: 2,
      printWidth: 80,
      parser: 'html',
      plugins: [pluginHtml.default],
    })
  } catch {
    const { formatHtml } = await import('@/lib/format-html')
    return formatHtml(code)
  }
}

export async function formatCssSource(code: string): Promise<string> {
  try {
    const [{ format }, pluginPostcss] = await Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/postcss'),
    ])

    return await format(code, {
      ...prettierOptions,
      parser: 'css',
      plugins: [pluginPostcss.default],
    })
  } catch {
    return code.trim()
  }
}

export async function formatJavascriptSource(code: string): Promise<string> {
  try {
    const [{ format }, pluginEstree, pluginBabel] = await Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/estree'),
      import('prettier/plugins/babel'),
    ])

    return await format(code, {
      ...prettierOptions,
      parser: 'babel',
      plugins: [pluginEstree.default, pluginBabel.default],
    })
  } catch {
    return code.trim()
  }
}
