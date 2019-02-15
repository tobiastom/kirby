import Vue from "vue";
import api from "@getkirby/api-js";

export default {
  async options() {
    const site = await api.get("site", { select: "options" });
    const options = site.options;
    let result = [];
    result.push({
      click: "rename",
      icon: "title",
      text: Vue.i18n.translate("rename"),
      disabled: !options.changeTitle
    });
    return result;
  }
};
