import { FC, memo } from 'react';

const Terms: FC = () => {
  return (
    <div className="text-lg px-6 py-3">
      <b>eGov.AI - Terms and Conditions</b>
      <br />
      <br /> Welcome to eGov.AI, the e-government application designed to
      provide information about laws and regulations in Moldova. By using this
      service, you agree to the following terms and conditions:
      <br />
      <br /> <b>Acceptance of Terms:</b> By accessing or using eGov.AI, you
      acknowledge that you have read, understood, and agree to be bound by these
      terms and conditions. If you do not agree to these terms, please do not
      use the service. <br />
      <br /> <b>Service Description:</b> eGov.AI is an AI-powered chatbot
      designed to assist users with inquiries related to laws and regulations in
      Moldova. The information provided by the chatbot is for general
      informational purposes only and should not be considered as legal advice.{' '}
      <br />
      <br /> <b>Accuracy of Information:</b> While we strive to ensure the
      accuracy and reliability of the information provided by eGov.AI, we cannot
      guarantee that all information is up-to-date, complete, or accurate. Users
      are encouraged to verify the information provided through official legal
      sources or consult with a qualified legal professional for specific legal
      advice. <br />
      <br /> <b>Limitation of Liability:</b> The use of eGov.AI is at your own
      risk. We shall not be held liable for any direct, indirect, incidental,
      special, or consequential damages arising out of or in any way connected
      with the use of this service, including but not limited to errors or
      omissions in the information provided. <br />
      <br />
      <b>Privacy Policy:</b> We respect your privacy and are committed to
      protecting your personal information. Our Privacy Policy outlines how we
      collect, use, and disclose information when you use eGov.AI. By using this
      service, you consent to the collection and use of your information as
      described in the Privacy Policy. <br />
      <br /> <b>User Conduct:</b> Users agree to use eGov.AI for lawful purposes
      and shall not engage in any conduct that could disrupt, damage, or impair
      the service's functionality or interfere with other users' access to the
      service. <br />
      <br />
      <b>Intellectual Property:</b> All content, including but not limited to
      text, graphics, logos, and software used in eGov.AI, is the property of
      the service provider or its licensors and is protected by copyright,
      trademark, and other intellectual property laws. <br />
      <br />
      <b>Modifications to Terms:</b> We reserve the right to modify or update
      these terms and conditions at any time without prior notice. Continued use
      of eGov.AI after any changes to the terms constitutes your acceptance of
      the modified terms. <br />
      <br /> <b>Termination:</b> We reserve the right to terminate or suspend
      access to eGov.AI at our discretion without prior notice, for any reason,
      including but not limited to a violation of these terms. <br />
      <br /> <b>Governing Law:</b> These terms and conditions shall be governed
      by and construed in accordance with the laws of Moldova. Any disputes
      arising from the use of eGov.AI shall be subject to the exclusive
      jurisdiction of the courts in Moldova. By using eGov.AI, you agree to
      abide by these terms and conditions. If you have any questions or concerns
      regarding these terms, please contact us at [
      <a href="mailto:example@example.com">example@example.com</a>]. Thank you
      for using eGov.AI!
    </div>
  );
};

export default memo(Terms);
