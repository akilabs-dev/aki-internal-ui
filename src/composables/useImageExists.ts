import { ref, watch, type Ref } from 'vue'

/** True when the URL resolves to a loadable image (used to show the Screenshot preview toggle). */
export function useImageExists(src: Ref<string | undefined>): Ref<boolean> {
  const exists = ref(false)

  watch(
    src,
    (url) => {
      exists.value = false
      if (!url) return

      const img = new Image()
      img.onload = () => {
        exists.value = true
      }
      img.onerror = () => {
        exists.value = false
      }
      img.src = url
    },
    { immediate: true },
  )

  return exists
}
