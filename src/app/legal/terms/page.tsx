import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  robots: 'noindex',
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-section-lg max-w-2xl mx-auto px-6">
      {/* TODO: review with counsel before publishing */}
      <h1 className="font-display text-4xl italic text-charcoal mb-2">Terms of Service</h1>
      <p className="font-sans text-xs text-charcoal/40 mb-12">
        Last updated: {new Date().toLocaleDateString('en-CA')}
      </p>

      <div className="space-y-8 font-sans text-sm text-charcoal/70 leading-relaxed">
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Eight3 website, you agree to be bound by these Terms of
            Service and all applicable laws and regulations. If you do not agree, you may not use
            this site.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">2. Age Restriction</h2>
          <p>
            You must be 19 years of age or older (18 in Alberta and Quebec) to purchase or use
            EIGHT3 products. By using this site, you confirm that you meet this age requirement.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">3. Product Use</h2>
          <p>
            EIGHT3 products are intended for adult use only and are to be used in compliance with
            all applicable Canadian federal and provincial laws governing cannabis. EIGHT3 makes no
            medical claims about its products.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">4. Purchases</h2>
          <p>
            All purchases are subject to availability and our return policy. Prices are listed in
            Canadian dollars and are subject to change without notice. TODO: complete with actual
            purchase terms.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-base font-medium text-charcoal mb-3">
            5. Limitation of Liability
          </h2>
          <p>
            Eight3 Inc. shall not be liable for any indirect, incidental, special, or consequential
            damages arising from your use of our products or this website. TODO: complete with
            counsel-approved language.
          </p>
        </section>
      </div>
    </div>
  )
}
