/** Alpine.data factory for the message input group demo (HTML preview). */
export function createButtonGroupMessageDemoData() {
  return {
    voiceEnabled: false,

    toggleVoice() {
      this.voiceEnabled = !this.voiceEnabled
    },

    placeholder() {
      return this.voiceEnabled
        ? 'Record and send audio...'
        : 'Send a message...'
    },
  }
}
