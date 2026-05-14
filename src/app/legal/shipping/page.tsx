import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Policy',
  robots: 'noindex',
}

export default function ShippingPage() {
  return (
    <div className="pt-32 pb-section-lg max-w-2xl mx-auto px-6">
      {/* TODO: review with counsel before publishing */}
      <h1 className="font-display text-4xl italic text-charcoal mb-2">Shipping Policy</h1>
      <p className="font-sans text-xs text-charcoal/40 mb-12">
        Last updated: {new Date().toLocaleDateString('en-CA')}
      </p>

      <div className="space-y-8 font-sans text-sm text-charcoal/70 leading-relaxed">
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">Shipping Zones</h2>
          <p>
            TODO: confirm shipping zones. Currently evaluating provinces where direct-to-consumer
            cannabis accessories can be shipped legally.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">Processing Time</h2>
          <p>
            Orders are processed within 2 business days. You will receive a tracking number by
            email once your order ships.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">
            Age Verification on Delivery
          </h2>
          <p>
            Signature and age verification may be required upon delivery. Carriers are instructed
            to confirm the recipient is 19+ (18 in Alberta and Quebec).
          </p>
        </section>
      </div>
    </div>
  )
}
