import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const siteKey = import.meta.env.VITE_PUBLIC_RECAPTCHA_SITE_KEY;
  console.log("ReCAPTCHA Site Key:", siteKey);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
export default Providers;
