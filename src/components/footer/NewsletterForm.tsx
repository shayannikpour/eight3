'use client'

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Newsletter signup — TODO: wire to email service')
      }}
      className="flex gap-2"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-cream/10 border border-cream/20 rounded-full px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40"
      />
      <button
        type="submit"
        className="bg-cream text-forest rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber transition-colors cursor-pointer"
        aria-label="Subscribe"
      >
        →
      </button>
    </form>
  )
}
