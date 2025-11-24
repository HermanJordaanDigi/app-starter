import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - SitePlan AI",
  description:
    "Terms of Service for SitePlan AI - Read our terms and conditions for using our AI-powered site plan generation service.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: November 24, 2025
          </p>
        </div>

        {/* Agreement to Terms */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of SitePlan AI&apos;s website, services, and applications
            (collectively, the &quot;Service&quot;). By accessing or using the
            Service, you agree to be bound by these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you do not agree to these Terms, you may not access or use the
            Service. If you are using the Service on behalf of an organization,
            you represent and warrant that you have the authority to bind that
            organization to these Terms.
          </p>
        </section>

        {/* Use License */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Use License</h2>
          <p className="text-muted-foreground leading-relaxed">
            Subject to your compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable, revocable license to access and use
            the Service for your personal or internal business purposes.
          </p>
          <div className="mt-4 space-y-3">
            <div>
              <h3 className="text-lg font-medium mb-2">
                You agree NOT to:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  Copy, modify, or create derivative works of the Service
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble the Service
                </li>
                <li>
                  Rent, lease, lend, sell, or sublicense access to the Service
                </li>
                <li>
                  Use the Service for any illegal or unauthorized purpose
                </li>
                <li>
                  Remove, alter, or obscure any proprietary notices
                </li>
                <li>
                  Interfere with or disrupt the Service or servers
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service
                </li>
                <li>
                  Use the Service to transmit viruses, malware, or harmful code
                </li>
                <li>
                  Harvest or collect information about users without consent
                </li>
                <li>
                  Use automated systems (bots, scrapers) without permission
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Credit System and Purchases */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Credit System and Purchases
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">Credits</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Service operates on a credit-based system. Each site plan
                generation consumes one (1) credit. Credits must be purchased
                before using the Service to generate site plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Credit packages and pricing are displayed on our Pricing page.
                We reserve the right to modify pricing at any time. Changes will
                not affect credits already purchased.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Payment</h3>
              <p className="text-muted-foreground leading-relaxed">
                All payments are processed through secure third-party payment
                processors. By providing payment information, you represent that
                you are authorized to use the payment method and authorize us to
                charge the applicable fees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Refunds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unused credits may be eligible for refund within 30 days of
                purchase, subject to our refund policy. Once a credit has been
                used to generate a site plan, it is non-refundable. To request a
                refund, contact us at{" "}
                <a
                  href="mailto:support@siteplanai.com"
                  className="text-primary hover:underline"
                >
                  support@siteplanai.com
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Credit Expiration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Credits do not expire and remain valid for as long as your
                account is active. If your account is terminated, any remaining
                credits will be forfeited.
              </p>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">User Responsibilities</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">Account Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Accurate Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree to provide accurate, current, and complete information
                when using the Service and to update such information as
                necessary to maintain its accuracy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Lawful Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the Service only for lawful purposes and in
                accordance with these Terms. You are responsible for ensuring
                that you have the right to search for and generate site plans
                for the properties you input into the Service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Content Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                Site plans generated through our Service are provided for your
                use. You are responsible for ensuring that your use of generated
                site plans complies with applicable laws, including copyright
                and property laws.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">Our Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and
                functionality are owned by SitePlan AI and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Generated Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Site plans generated through our Service are provided to you for
                your use. You retain ownership of the generated site plans, but
                we retain ownership of the underlying technology and algorithms
                used to generate them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">User Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                By submitting property addresses and related information to the
                Service, you grant us a license to use, process, and store this
                information solely for the purpose of providing the Service to
                you.
              </p>
            </div>
          </div>
        </section>

        {/* Service Availability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Service Availability</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strive to provide a reliable and available Service, but we do not
            guarantee that the Service will be available at all times or free
            from interruptions. We may:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Modify, suspend, or discontinue the Service at any time</li>
            <li>
              Perform scheduled or emergency maintenance that may cause
              temporary unavailability
            </li>
            <li>
              Impose limits on certain features or restrict access to parts of
              the Service
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We will make reasonable efforts to notify you of any significant
            changes or planned maintenance that may affect your use of the
            Service.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            TO THE FULLEST EXTENT PERMITTED BY LAW, SITEPLAN AI AND ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
            DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED
            THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE
            EVENT GIVING RISE TO THE LIABILITY.
          </p>
          <div className="mt-4 space-y-3">
            <div>
              <h3 className="text-lg font-medium">Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED. WE DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                <li>The Service will meet your specific requirements</li>
                <li>The Service will be uninterrupted or error-free</li>
                <li>
                  The results obtained from the Service will be accurate or
                  reliable
                </li>
                <li>
                  Generated site plans will be suitable for any particular
                  purpose
                </li>
                <li>Any errors in the Service will be corrected</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Indemnification */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to indemnify, defend, and hold harmless SitePlan AI and
            its officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses, including
            reasonable attorneys&apos; fees, arising out of or in any way
            connected with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Your access to or use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Your use of generated site plans</li>
            <li>Any content you submit to the Service</li>
          </ul>
        </section>

        {/* Termination */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Termination</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">By You</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may terminate your account at any time by contacting us or
                through your account settings. Upon termination, your access to
                the Service will cease, and any remaining credits will be
                forfeited unless eligible for refund under our refund policy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">By Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate your account and access to the
                Service immediately, without prior notice or liability, for any
                reason, including if you breach these Terms. Upon termination,
                your right to use the Service will immediately cease.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Effect of Termination</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, all provisions of these Terms that by their
                nature should survive termination shall survive, including
                ownership provisions, warranty disclaimers, indemnity, and
                limitations of liability.
              </p>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which SitePlan AI operates, without
            regard to its conflict of law provisions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Any disputes arising from or relating to these Terms or the Service
            shall be resolved through binding arbitration in accordance with the
            rules of the American Arbitration Association, except that either
            party may seek injunctive relief in a court of competent
            jurisdiction.
          </p>
        </section>

        {/* Dispute Resolution */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Dispute Resolution</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">Informal Resolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Before filing a formal claim, you agree to contact us and
                attempt to resolve the dispute informally. We will attempt to
                resolve disputes in good faith.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Arbitration</h3>
              <p className="text-muted-foreground leading-relaxed">
                If we cannot resolve a dispute informally, any dispute will be
                resolved through binding arbitration rather than in court,
                except that you may assert claims in small claims court if your
                claims qualify.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Class Action Waiver</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree that disputes will be resolved on an individual basis
                and not as a class action, consolidated action, or
                representative action.
              </p>
            </div>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms at any time. We will
            notify you of any material changes by posting the new Terms on this
            page and updating the &quot;Last updated&quot; date.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your continued use of the Service after any changes to these Terms
            constitutes your acceptance of the new Terms. If you do not agree to
            the modified Terms, you must stop using the Service.
          </p>
        </section>

        {/* Severability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Severability</h2>
          <p className="text-muted-foreground leading-relaxed">
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law, and the remaining provisions will
            continue in full force and effect.
          </p>
        </section>

        {/* Entire Agreement */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Entire Agreement</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms, together with our Privacy Policy and any other
            agreements expressly incorporated by reference, constitute the sole
            and entire agreement between you and SitePlan AI regarding the
            Service and supersede all prior and contemporaneous understandings.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg space-y-1">
            <p className="font-medium">SitePlan AI</p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:legal@siteplanai.com"
                className="text-primary hover:underline"
              >
                legal@siteplanai.com
              </a>
            </p>
            <p className="text-muted-foreground">
              Support:{" "}
              <a
                href="mailto:support@siteplanai.com"
                className="text-primary hover:underline"
              >
                support@siteplanai.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
