export function createInputDemoData() {
  return {
    subscribeEmail: '',

    onSubscribe(event: Event) {
      event.preventDefault()
    },
  }
}
