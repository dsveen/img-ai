'use client';
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { LandingFooter } from "@/components/landing-footer";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <div>
      <img src="/assets/images/logo-dark.png" className="h-8 logo-dark" alt="Logo Dark" />
      <div className="mx-auto max-w-3xl p-4 md:p-12 bg-white">
    <div className="max-w-3xl mx-auto xl:max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-3xl">
            Privacy Policy
        </h1>
        <p className="text-lg mt-2">
            At HeadshotPro, your privacy and the protection of your data is our top priority. All data collected, both personal and non-personal, is protected with the highest global standards.
        </p>
        <hr className="border border-gray-200 w-full mt-8" />
        <div className="prose mx-auto mt-8 nuxt-content">
            <p>HeadshotPro is operated by Postcrafts PTE LTD.</p>
            <p>At HeadshotPro, your privacy and the protection of your data is our top priority. All data collected, both personal and non-personal, is protected with the highest global standards. As we believe your personal data is and should always remain yours, we have a strong privacy policy in place. This policy is fully compliant with the European General Data Protection Regulation (GDPR), as well as the related laws and regulations in place at Singapore.</p>
            <p>The contents of this privacy policy are applicable to the website <a href="http://www.HeadshotPro.com" rel="nofollow noopener noreferrer" target="_blank">www.HeadshotPro.com</a> and use of the services provided by this site to the user.</p>
            <h2 id="1-notice"><a href="#1-notice" aria-hidden="true"><span className="icon icon-link"></span></a>1. Notice</h2>
            <p>Whenever we request information that can be used to personally identify you, you will explicitly be asked to provide it and/or give us permission to use it. This information is requested by our system whenever confirmation of your permission is required to continue (e.g. asking for permission for the use of cookies when you visit our site, asking for your payment information when you sign up).</p>
            <h2 id="2-your-consent"><a href="#2-your-consent" aria-hidden="true"><span className="icon icon-link"></span></a>2. Your consent</h2>
            <p>You will always have the choice whether to give us permission to process your information or not.</p>
            <p>With data that is not essential to the core functionality of our services (e.g. cookies for marketing purposes, company name, etc.) you are able to decline permission without any consequences to your access to HeadshotPro.</p>
            <p>If you choose to decline the use of essential information for the use of our services (e.g. essential cookies, payment information, e-mail address), we will be unable to give you access to all aspects of HeadshotPro that require such information to function. Whether any given information is essential to our services or not will be explicitly indicated when you are asked to provide or give permission for us to use such information.</p>
            <p>By agreeing to this privacy policy and providing us with your personal information you consent to us processing said information as described in this privacy policy.</p>
            <h2 id="3-usage"><a href="#3-usage" aria-hidden="true"><span className="icon icon-link"></span></a>3. Usage</h2>
            <h3 id="31-data-we-collect"><a href="#31-data-we-collect" aria-hidden="true"><span className="icon icon-link"></span></a>3.1. Data we collect</h3>
            <p>We collect various forms of personal identifiable information. This includes all information which could directly be used to identify you. This includes your name, e-mail address, payment information and more.</p>
            <p>We also collect data based on your usage of our platform with our optional cookies. This data is collected and processed fully anonymously, meaning it can not be traced back to you or your person.</p>
            <h3 id="32-how-we-use-your-data"><a href="#32-how-we-use-your-data" aria-hidden="true"><span className="icon icon-link"></span></a>3.2. How we use your data</h3>
            <p>We use your personally identifiable information for the following purposes:</p>
            <ul>
                <li>Provide you with access to all of HeadshotPro’s features</li>
                <li>Process your payments</li>
                <li>Inform you about important information regarding HeadshotPro, as well as any other information you choose to opt in to.</li>
                <li>Contact you to inform you about the status of your order, if there is a problem with your order, if you request us to via our support services, or for other reasons you may opt in to.</li>
            </ul>
            <p>We use anonymous usage data to analyze the use of our platform by our users so we can improve our services.</p>
            <p>Data regarding the use of our platform by our users may be shared with third parties we work with to improve our services and keep our activities running. This includes organizations like marketing agencies. This data will always be made fully anonymous before it’s shared.</p>
            <p>Some of your personal identifiable information may also need to be shared with our partners to provide you with our essential services. Examples include shipping companies when we need to physically mail you a product. In these cases, these partners will only be provided with the information absolutely necessary to provide their service.</p>
            <p>If a legal request for your personally identifiable information or other information regarding you or your person is requested by a federal court, judge or law enforcement, we are legally required to provide them with your personal identifiable information. In these cases, we may do so without your permission and without informing you.</p>
            <p>Outside of these three categories, no party outside of HeadshotPro will ever get access to your personal information unless you specifically grant us permission. If we do wish to share your information with an external party outside of these three categories, we will always explicitly ask you for permission first.</p>
            <h2 id="4-retention-of-information"><a href="#4-retention-of-information" aria-hidden="true"><span className="icon icon-link"></span></a>4. Retention of information</h2>
            <p>We retain your information as long as this is necessary to provide you with our services. All personal identifiable information will be deleted when you inform us you wish to stop using our services (e.g. by deleting your account), when your subscription expires, or when you explicitly request us to delete it. Once your request has been submitted and confirmed, your information will be deleted within 14 days.</p>
            <p>Information may be retained for longer if this is necessary for legal requirements. If required by law or ordered by a federal judge or court, we may retain information for longer and/or share it with said organization.</p>
            <h2 id="5-your-rights"><a href="#5-your-rights" aria-hidden="true"><span className="icon icon-link"></span></a>5. Your rights</h2>
            <h3 id="51-your-rights"><a href="#51-your-rights" aria-hidden="true"><span className="icon icon-link"></span></a>5.1. Your rights</h3>
            <p>You are the owner of your information. As stated by the GDPR, you have several rights regarding the treatment of your information by us.</p>
            <ul>
                <li>Right of access: You are entitled to receiving a copy of all personally identifiable information related to you and your person that we have processed</li>
                <li>Right to rectification: You are entitled to have any personally identifiable information you have provided to us corrected or adjusted in the case the information is not correct</li>
                <li>Right to erasure: You are entitled to having some or all personally identifiable information we have gathered be erased at your request</li>
                <li>Right to restriction of processing: You are entitled to us stopping the processing of relevant personally identifiable information if this information is not correct, unlawful, no longer necessary according to the information in our privacy policy and/or when you object to us processing said information. Objection is only valid if there is no essential reason for us to process said information.</li>
                <li>Right to data portability: You have the right to transfer personally identifiable information we have processed to another party</li>
            </ul>
            <p>If you would like to make use of any of these rights, you may contact us via the e-mail address at the end of this privacy policy.</p>
            <h3 id="52-right-to-object"><a href="#52-right-to-object" aria-hidden="true"><span className="icon icon-link"></span></a>5.2. Right to object</h3>
            <p>We are legally required to separately inform you about your right to object. Conform the European GDPR, you have the right to object to us processing your personally identifiable information for direct marketing purposes. If you file an objection with us, we are legally required to immediately halt the processing of said information for said purpose. You can file an objection using the e-mail address at the end of this privacy policy.</p>
            <h2 id="6-opting-out"><a href="#6-opting-out" aria-hidden="true"><span className="icon icon-link"></span></a>6. Opting out</h2>
            <p>In addition to our core services, we provide various extra services to improve your experience. This includes the sending of newsletters, contacting you for customer satisfaction surveys, et cetera. At any point, you may opt out of these kinds of services. For our contact via e-mail, you can click the link at the bottom of any of our e-mails to change your preferences. You can also opt out of additional communication and services in your account settings.</p>
            <h2 id="7-security-of-your-information"><a href="#7-security-of-your-information" aria-hidden="true"><span className="icon icon-link"></span></a>7. Security of your information</h2>
            <p>We take various measures to protect your data to the best of our abilities. In order to achieve this, we make use of:</p>
            <ul>
                <li>Security software, including virus scanners</li>
                <li>TLS secured connections for a secure connection between our servers and your device</li>
                <li>The DKIM, SPF and DMARC internet standards to protect our email traffic</li>
            </ul>
            <h2 id="8-changes-to-this-policy"><a href="#8-changes-to-this-policy" aria-hidden="true"><span className="icon icon-link"></span></a>8. Changes to this policy</h2>
            <p>We reserve the right to make changes to our privacy policy. When this happens, you will be notified at least two weeks in advance of the changes taking effect. If you do not agree with the new policy, you are free to withdraw your consent within the given time period.</p>
            <h2 id="9-contact"><a href="#9-contact" aria-hidden="true"><span className="icon icon-link"></span></a>9. Contact</h2>
            <p>If you have any questions about our privacy policy, have a comment about it, wish to talk about the enforcement of our policy or want to otherwise discuss our privacy policy, you may reach out to us via the following e-mail address: <a href="mailto:support@HeadshotPro.com">support@HeadshotPro.com</a></p>
        </div>
    </div>
</div>
      </div>
      <LandingFooter />
    </div>
   );
}
 
export default LandingPage;
