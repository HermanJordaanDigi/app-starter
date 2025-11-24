import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SitePlan AI",
  description:
    "Privacy Policy for SitePlan AI - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center border-b pb-8">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: November 24, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to SitePlan AI (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our AI-powered site plan generation service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By using SitePlan AI, you agree to the collection and use of
            information in accordance with this policy. If you do not agree with
            our policies and practices, please do not use our service.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">
                Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We collect personal information that you voluntarily provide to
                us when you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Register for an account</li>
                <li>Use our services to create site plans</li>
                <li>Purchase credits or subscription plans</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                This information may include: name, email address, payment
                information, and property addresses you search for.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Automatically Collected Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When you access our service, we automatically collect certain
                information about your device and usage, including: IP address,
                browser type, operating system, access times, pages viewed, and
                the page you visited before navigating to our service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Location Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect location data when you use our mapping features to
                search for and generate site plans. This includes property
                addresses and geographic coordinates.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information we collect or receive to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>Provide, operate, and maintain our services</li>
            <li>Process your transactions and manage your account</li>
            <li>
              Generate site plans based on your property address submissions
            </li>
            <li>
              Improve, personalize, and expand our services and features
            </li>
            <li>Communicate with you about updates, support, and promotions</li>
            <li>Monitor and analyze usage and trends to improve user experience</li>
            <li>Detect, prevent, and address technical issues and fraud</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>
        </section>

        {/* Data Storage and Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Storage and Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. These measures
            include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Limited access to personal information by our staff</li>
            <li>Secure cloud storage infrastructure</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your information, we cannot guarantee
            its absolute security.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use third-party services to help us operate our platform and
            provide our services:
          </p>
          <div className="space-y-3 mt-2">
            <div>
              <h3 className="text-lg font-medium">Google Maps Platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use Google Maps APIs to provide mapping and location services.
                Google&apos;s privacy policy applies to their services:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Google OAuth</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use Google OAuth for authentication. When you sign in with
                Google, we receive basic profile information as permitted by
                your Google account settings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Payment Processors</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use third-party payment processors to handle transactions. We
                do not store your complete payment card information on our
                servers.
              </p>
            </div>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies and similar tracking technologies to track activity on
            our service and store certain information. Cookies are files with a
            small amount of data that are stored on your device.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Authentication and security</li>
            <li>Remembering your preferences and settings</li>
            <li>Analytics and performance monitoring</li>
            <li>Understanding how you use our service</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-2">
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our service. For more
            information, see our{" "}
            <a
              href="/legal/cookies"
              className="text-primary hover:underline"
            >
              Cookie Policy
            </a>
            .
          </p>
        </section>

        {/* Your Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              <strong>Access:</strong> Request access to the personal information
              we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal
              information
            </li>
            <li>
              <strong>Portability:</strong> Request a copy of your information in
              a machine-readable format
            </li>
            <li>
              <strong>Objection:</strong> Object to our processing of your
              information
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing
              under certain circumstances
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw your consent at
              any time where we rely on consent
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:privacy@siteplanai.com"
              className="text-primary hover:underline"
            >
              privacy@siteplanai.com
            </a>
            .
          </p>
        </section>

        {/* Data Retention */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal information for as long as necessary to
            provide our services and fulfill the purposes outlined in this
            Privacy Policy. We will retain and use your information to comply
            with our legal obligations, resolve disputes, and enforce our
            agreements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When you delete your account, we will delete or anonymize your
            personal information within a reasonable timeframe, unless we are
            required to retain it for legal or legitimate business purposes.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Children&apos;s Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our service is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13. If
            you are a parent or guardian and believe your child has provided us
            with personal information, please contact us, and we will take steps
            to delete such information.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page and
            updating the &quot;Last updated&quot; date at the top of this policy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We encourage you to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at:
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
