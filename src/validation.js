import { extend, localize } from "vee-validate";
import { min, required } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

extend("required", required);
extend("min", min);

localize({
  en
});
