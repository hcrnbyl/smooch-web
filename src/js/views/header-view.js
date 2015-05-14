var Backbone = require('backbone');

var template = require('../../templates/header.tpl');

module.exports = Backbone.View.extend({
    events: {
        "click": "toggle"
    },

    initialize: function() {
        this.listenTo(this.model, 'change:unread', this.render);
    },

    render: function() {
        this.$el.html(template({
            count: this.model.unread
        }));
        return this;
    },

    toggle: function(e) {
        if (window.SupportKit && window.SupportKit.ui && window.SupportKit.ui.toggle) {
            window.SupportKit.ui.toggle();
        }

        e.stopPropagation();
    }
});