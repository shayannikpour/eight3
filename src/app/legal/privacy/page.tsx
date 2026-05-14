import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: 'noindex',
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-section-lg max-w-2xl mx-auto px-6">
      {/* TODO: review with counsel before publishing */}
      <h1 className="font-display text-4xl italic text-charcoal mb-2">Privacy Policy</h1>
      <p className="font-sans text-xs text-charcoal/40 mb-12">
        Last updated: {new Date().toLocaleDateString('en-CA')}
      </p>

      <div className="space-y-8 font-sans text-sm text-charcoal/70 leading-relaxed">
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as name and email address when
            you contact us or sign up for our newsletter. We also collect usage data through
            analytics. TODO: enumerate all data collection with counsel.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use your information to fulfill orders, send transactional emails, and improve our
            products and services. We do not sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">
            PIPEDA Compliance
          </h2>
          <p>
            Eight3 complies with Canada&apos;s Personal Information Protection and Electronic
            Documents Act (PIPEDA). TODO: complete compliance statement with counsel.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">Contact</h2>
          <p>For privacy inquiries, contact hello@eight3.ca.</p>
        </section>
      </div>
    </div>
  )
}
