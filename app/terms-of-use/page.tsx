'use client';

import Container from '@/components/container';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <Container>
      <div className="pt-36 pb-10">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Terms and Conditions
          </h1>
          <p className="mb-6">
            Please refer to the full Terms and Conditions document for detailed
            information on your rights and obligations when using
            Campustalkative. The document covers topics such as user
            responsibilities, intellectual property rights, limitations of
            liability, dispute resolution, and governing law. By accessing and
            using Campustalkative, you agree to abide by these Terms and
            Conditions. If you do not agree with any part of these terms, you
            should not use our platform. For the complete and detailed Terms and
            Conditions, please visit [URL] or contact us at [email address] if
            you have any questions.
          </p>

          <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
            Terms and Conditions
          </h2>
          <p className="mb-6">
            These Terms and Conditions ("Agreement") govern your use of the
            Campustalkative platform ("Platform") provided by Campustalkative
            ("Company," "we," or "us"). By accessing or using the Platform, you
            agree to be bound by these Terms and Conditions. If you do not agree
            with any part of this Agreement, you should not use the Platform.
          </p>
          <div className="mx-20">
            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              User Responsibilities:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  1.1
                </span>
                You are solely responsible for the accuracy, completeness, and
                legality of the information you provide on the Platform.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  1.2
                </span>
                You agree not to engage in any unlawful, harmful, or abusive
                behavior while using the Platform, including but not limited to
                harassment, discrimination, or unauthorized access to others'
                accounts.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  1.3
                </span>
                You are responsible for maintaining the confidentiality of your
                account credentials and agree not to share them with third
                parties.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  1.4
                </span>
                You acknowledge that the content and materials on the Platform
                are for informational purposes only, and you should
                independently verify any information before relying on it.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Intellectual Property:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  2.1
                </span>
                The Platform and its content, including but not limited to text,
                graphics, logos, and software, are the property of
                Campustalkative and are protected by intellectual property laws.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  2.2
                </span>
                You may not modify, reproduce, distribute, or create derivative
                works based on the Platform or its content without prior written
                permission from Campustalkative.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Limitations of Liability:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  3.1
                </span>
                The Platform is provided on an "as is" basis, and we make no
                warranties or representations regarding its availability,
                accuracy, or reliability.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  3.2
                </span>
                We are not liable for any direct, indirect, incidental,
                consequential, or punitive damages arising out of your use or
                inability to use the Platform.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  3.3
                </span>
                We are not responsible for the actions, content, or conduct of
                third parties on the Platform, including users, employers, or
                industry professionals.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Dispute Resolution:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  4.1
                </span>
                Any disputes arising from this Agreement shall be resolved
                through arbitration conducted by a neutral arbitrator.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  4.2
                </span>
                The arbitration shall be governed by the rules of the
                arbitration body chosen by the parties and held in the
                jurisdiction determined by the Company.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Governing Law:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  5.1
                </span>
                This Agreement shall be governed by and construed in accordance
                with the laws of the jurisdiction where Campustalkative is
                registered.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Modifications:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  6.1
                </span>
                We reserve the right to modify or terminate the Platform or this
                Agreement at any time without prior notice.
              </li>
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  6.2
                </span>
                Any modifications to this Agreement will be effective
                immediately upon posting on the Platform. Your continued use of
                the Platform after the modifications constitute your acceptance
                of the revised Agreement.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Severability:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  7.1
                </span>
                If any provision of this Agreement is found to be unenforceable
                or invalid, the remaining provisions shall remain in full force
                and effect.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
              Entire Agreement:
            </h2>
            <ul className="mx-5">
              <li className="flex items-start">
                <span className="text-xl font-bold text-gray-600 w-6 mr-4 inline-block">
                  8.1
                </span>
                This Agreement constitutes the entire agreement between you and
                Campustalkative regarding the use of the Platform, superseding
                any prior agreements or understandings.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-ct-primary-300 p-8 rounded-md shadow-md sticky h-max my-10">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and
            Conditions or the practices of our platform, you can contact us at:
          </p>
          <p className="mt-4 text-ct-yellow-1000">
            Campustalkative Inc.
            <br />
            1234 Example Street,
            <br />
            Abuja, Nigeria, 100678
            <br />
            <Link href="mailto:contact@campustalkative.com">
              contact@campustalkative.com
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
