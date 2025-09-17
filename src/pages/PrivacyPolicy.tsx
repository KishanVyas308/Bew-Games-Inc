import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto mt-10 px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us
            </p>
            <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto" />
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <p className="text-lg">
                Bew Games built Survival RPG app as an Ad Supported app. This SERVICE is provided by Bew Games at no cost and is intended for use as is.
              </p>
              <p>
                This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
              </p>
              <p>
                If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Collection and Use</h2>
              <p>
                For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Android advertising identifier. The information that we request will be retained by us and used as described in this privacy policy.
              </p>
              <p className="mt-4">
                The app does use third party services that may collect information used to identify you.
              </p>
              <p className="mt-4 font-semibold text-foreground">
                Link to privacy policy of third party service providers used by the app:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Play Services</a></li>
                <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AdMob</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Log Data</h2>
              <p>
                We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
              <p>
                Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
              </p>
              <p className="mt-4">
                This Service does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Providers</h2>
              <p>
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>
              <p className="mt-4">
                We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Security</h2>
              <p>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Links to Other Sites</h2>
              <p>
                This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>Bew Games</strong></p>
                <p>Email: <a href="mailto:support@bewgames.com" className="text-primary hover:underline">support@bewgames.com</a></p>
                <p>Website: <a href="https://www.bewgames.com" className="text-primary hover:underline">www.bewgames.com</a></p>
              </div>
            </section>

           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;