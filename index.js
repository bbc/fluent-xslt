function run(resolve, reject) {
    if (!this.stylesheet) {
        return reject(new Error('No stylesheet has been loaded.'));
    }

    if (!this.content) {
        return reject(new Error('No content has been loaded.'));
    }

    return resolve(this.content);
}

function fluxslt() {
    var Promise = require('bluebird');
    return  {
        withStylesheet: function(stylesheet) {
            this.stylesheet = stylesheet;
            return this;
        },
        withContent: function(content) {
            this.content = content;
            return this;
        },
        run: function() {
            return new Promise(run.bind(this));
        }
    }
}

module.exports = fluxslt;
