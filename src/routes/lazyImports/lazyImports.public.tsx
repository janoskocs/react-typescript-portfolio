// https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/25#issuecomment-1729071347

import { lazyImport } from "../../utils/lazyImport";

const AboutMePage = lazyImport("../pages/about-me/about-me");
const ContactMePage = lazyImport("../pages/contact-me/contact-me");

export { AboutMePage, ContactMePage };
