import {
  commandEmptyLabel,
  commandSettingsItems,
  commandSuggestionItems,
  type CommandDemoItem,
} from '@/demos/command/command-demo.data'

function filterItems(items: CommandDemoItem[], search: string) {
  const query = search.trim().toLowerCase()
  if (!query) return items
  return items.filter((item) => item.label.toLowerCase().includes(query))
}

export function createCommandDemoData() {
  return {
    search: '',
    emptyLabel: commandEmptyLabel,
    suggestionItems: commandSuggestionItems,
    settingsItems: commandSettingsItems,

    filteredSuggestions() {
      return filterItems(this.suggestionItems, this.search)
    },

    filteredSettings() {
      return filterItems(this.settingsItems, this.search)
    },

    showEmpty() {
      return (
        this.search.trim() !== ''
        && this.filteredSuggestions().length === 0
        && this.filteredSettings().length === 0
      )
    },

    select(value: string) {
      const item = [...this.suggestionItems, ...this.settingsItems].find(
        (entry) => entry.value === value,
      )
      if (item?.disabled) return
      this.search = ''
    },
  }
}
