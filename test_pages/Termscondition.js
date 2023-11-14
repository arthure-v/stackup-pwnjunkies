import React from 'react';
import "./Termscondition.css"
import Navbar from './Navbar';
import Footer from './Footer';

function Termscondition() {
  return (
    <div>
      <Navbar/>
      <h1 >Terms and Conditions</h1>
      <ol>
        <li>
          <h3 class="Terms">Availability and Pricing</h3>
          <p class="terms">
            GifteX offers various gift cards and gift codes ("Gift Cards") for purchase through its services.
            All Gift Cards are subject to availability, and GifteX reserves the right to limit or reject any orders
            and discontinue Gift Cards without notice, even after an order is placed.
            Prices are subject to change without notice, and the price at the time of order placement will be charged.
          </p>
        </li>
        <li>
          <h3 class="Terms">Vendor Terms and Liability</h3>
          <p class="terms">
            Gift Cards purchased through GifteX are issued and activated by third-party retailers and vendors.
            Each Gift Card's purchase is governed by terms and conditions set by the issuing vendor, in addition to these Terms.
            Vendors may impose expiration dates, restrictions, and other conditions.
            GifteX is not responsible for any liabilities or costs incurred by users due to vendors or their products and services.
            Users should review and understand vendor terms before purchasing Gift Cards.
          </p>
        </li>
        <li>
          <h3 class="Terms">Payment Options</h3>
          <p class="terms">
            GifteX accepts various forms of payment, including Credit Card, Debit Card, and PayPal.
            The purchase price of Gift Cards will be billed in full when GifteX provides the Gift Card to the user.
            By submitting an order, users acknowledge authorization to use the designated payment method,
            allowing GifteX to charge the purchase order accordingly.
          </p>
          <h1>Privacy Policy</h1>
          
<p class="terms">
This privacy policy has been crafted to address the concerns of individuals regarding the usage of their Personally Identifiable Information (PII) online. PII, as defined in Indian privacy law, particularly The Information Technology Act, 2000, comprises information that can be used individually or in combination with other data to identify, contact, or locate a single person, or to identify an individual in context. We urge you to read our privacy policy thoroughly to comprehend how we collect, utilize, protect, or handle your Personally Identifiable Information in alignment with our website.

*What Personal Information Do We Collect?*

When you visit our site, register, or place an order, you may be prompted to enter information such as your Name, Email address, Mailing address, Phone number, Credit card information, or other details that assist in enhancing your experience.

*When Do We Collect Information?*

We collect information when you place an order, undergo Order Verification, or provide information on our site.

*How Do We Use Your Information?*

We use the information collected to:

- Personalize your user experience and deliver content and product offerings tailored to your interests.
- Improve our customer service by responding to your requests promptly.
- Expedite transaction processing.
- Send periodic emails, using the email address provided for order-related communication and responding to inquiries.

*How Do We Protect Your Information?*

We employ security measures, including regular website scans, secure networks, and limited access to authorized personnel. Sensitive/credit information is encrypted using Secure Socket Layer (SSL) technology, and transactions are processed through a secure gateway provider.

*Do We Use Cookies?*

Yes, we use cookies to enhance your site experience, remember items in your shopping cart, and gather aggregate data about site traffic and interactions to improve future experiences.

*Third-Party Disclosure*

We do not sell, trade, or transfer personally identifiable information to outside parties unless notified in advance. This excludes trusted third parties assisting in website operations, business conduct, or service provision, provided they agree to keep information confidential.

*Third-Party Links*

Occasionally, we may include third-party products or services, each with independent privacy policies. We are not liable for the content and activities of linked sites.

*India Privacy Laws Compliance*

We adhere to Indian privacy laws and regulations, including The Information Technology Act, 2000, ensuring that our practices align with the legal requirements of the country.

*Changes to Privacy Policy*

Any changes to our privacy policy will be notified on our Privacy Policy Page.

*How to Contact Us*

For any queries or data deletion requests, contact us at  support@giftex.in.
</p>
        </li>
        {/* Include other terms similarly */}
      </ol>
      <Footer/>
    </div>
  );
}

export default Termscondition;
