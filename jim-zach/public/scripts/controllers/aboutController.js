'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
