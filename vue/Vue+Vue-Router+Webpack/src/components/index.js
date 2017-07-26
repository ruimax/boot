import tab1 from "./tab_1.js";
import tab2 from "./tab_2.js";

module.exports = {
    template: require('../templates/index.html'),
    components: {
        "tab1": tab1,
        "tab2": tab2
    },
    ready: function(){}
}
