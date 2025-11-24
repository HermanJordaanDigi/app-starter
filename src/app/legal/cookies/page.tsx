import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - SitePlan AI",
  description:
    "Cookie Policy for SitePlan AI - Learn about how we use cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
          <p className="text-muted-foreground">
            Last updated: November 24, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Cookie Policy explains how SitePlan AI (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
            tracking technologies when you visit our website and use our
            services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By using our Service, you consent to the use of cookies in
            accordance with this Cookie Policy. If you do not agree to our use
            of cookies, you should disable them by following the instructions in
            the &quot;Managing Cookies&quot; section below.
          </p>
        </section>

        {/* What Are Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Are Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files that are placed on your device (computer,
            smartphone, or tablet) when you visit a website. They are widely used
            to make websites work more efficiently and provide information to the
            website owners.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              <strong>Session cookies:</strong> These are temporary cookies that
              expire when you close your browser. They allow websites to link
              your actions during a single browsing session.
            </li>
            <li>
              <strong>Persistent cookies:</strong> These remain on your device
              for a set period or until you manually delete them. They help
              websites remember your preferences and settings for future visits.
            </li>
          </ul>
        </section>

        {/* How We Use Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies to enhance your experience, improve our services, and
            understand how you interact with our website. Specifically, we use
            cookies to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>Keep you signed in to your account</li>
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our Service</li>
            <li>Improve our website performance and functionality</li>
            <li>Provide personalized content and features</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Prevent fraud and enhance security</li>
            <li>Deliver relevant advertising (if applicable)</li>
          </ul>
        </section>

        {/* Types of Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">
                Essential Cookies (Required)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies are necessary for the website to function properly
                and cannot be disabled in our systems. They are usually only set
                in response to actions you take, such as logging in, setting
                privacy preferences, or filling in forms.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Examples:</strong> Authentication tokens, session IDs,
                security cookies
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> Session or up to 30 days
              </p>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">
                Functional Cookies (Optional)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies enable enhanced functionality and personalization,
                such as remembering your preferences (theme, language) and
                providing personalized features. Without these cookies, some or
                all of these services may not function properly.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Examples:</strong> Theme preference, language settings,
                user preferences
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> Up to 1 year
              </p>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">
                Analytics Cookies (Optional)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. This
                helps us improve our website and services.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Examples:</strong> Google Analytics, usage statistics,
                performance metrics
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> Up to 2 years
              </p>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">
                Marketing Cookies (Optional)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies are used to track visitors across websites and
                display ads that are relevant and engaging. They may be set by us
                or third-party advertising partners.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Examples:</strong> Advertising IDs, conversion tracking,
                retargeting pixels
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> Up to 2 years
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Third-Party Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            In addition to our own cookies, we use various third-party services
            that may also set cookies on your device. These third parties have
            their own privacy policies and cookie policies.
          </p>
          <div className="space-y-3 mt-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Google Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                We use Google Maps for mapping functionality and Google OAuth for
                authentication. These services may set cookies for functionality
                and analytics purposes.
              </p>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Learn more about Google&apos;s use of cookies
                </a>
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Analytics Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may use analytics services to help us understand how users
                interact with our Service. These services collect information
                about your use of the Service and other websites.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Payment Processors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you make a purchase, our payment processors may set cookies
                to facilitate secure transactions and prevent fraud.
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Managing Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie preferences through your browser
            settings.
          </p>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Most web browsers allow you to manage your cookie preferences
                through their settings. You can set your browser to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Block all cookies</li>
                <li>Only accept first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Receive notifications when cookies are being sent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Here are links to cookie management instructions for popular
                browsers:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Impact of Disabling Cookies
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Please note that if you disable or reject cookies, some features
                of our Service may not function properly or may not be available
                to you. Essential cookies are required for the Service to work,
                and disabling them will prevent you from using certain features,
                such as staying logged in.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Opt-Out of Analytics
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If we use Google Analytics, you can opt out by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Do Not Track */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Do Not Track Signals</h2>
          <p className="text-muted-foreground leading-relaxed">
            Some browsers include a &quot;Do Not Track&quot; (DNT) feature that
            signals to websites that you do not want to be tracked. Because
            there is no common understanding of how to interpret DNT signals, we
            do not currently respond to DNT signals.
          </p>
        </section>

        {/* Mobile Devices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Mobile Devices</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you access our Service through a mobile device, you may be able
            to control tracking technologies through your device settings. For
            example:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>
              <strong>iOS:</strong> Go to Settings &gt; Privacy &gt; Tracking to
              manage app tracking preferences
            </li>
            <li>
              <strong>Android:</strong> Go to Settings &gt; Google &gt; Ads to
              opt out of personalized advertising
            </li>
          </ul>
        </section>

        {/* Updates to Cookie Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Changes to This Cookie Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any material changes by
            posting the updated policy on this page and updating the &quot;Last
            updated&quot; date.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We encourage you to review this Cookie Policy periodically to stay
            informed about our use of cookies.
          </p>
        </section>

        {/* More Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">More Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            For more information about how we handle your personal data, please
            see our{" "}
            <a href="/legal/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about our use of cookies or other tracking
            technologies, please refer to the &quot;All About Cookies&quot;
            website at{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.allaboutcookies.org
            </a>{" "}
            for general information.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Cookie Policy or our use of
            cookies, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg space-y-1">
            <p className="font-medium">SitePlan AI</p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:privacy@siteplanai.com"
                className="text-primary hover:underline"
              >
                privacy@siteplanai.com
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
