import { extend, localize } from "vee-validate";
import { min, required, email } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

extend("required", required);
extend("min", min);
extend("email", email);

localize({
  en
});
