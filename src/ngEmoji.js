var app = angular.module('ngEmoji' , []);

app.directive('emoji', function() {
    return {
        templateUrl: documentRoot + 'emoji.html',
        restrict: 'E',
        scope:{
            inputName: '@'
        },  
        compile: function($scope, element){
            emojify.setConfig({

                emojify_tag_type : 'div',           // Only run emojify.js on this element
                only_crawl_id    : null,            // Use to restrict where emojify.js applies
                img_dir          : documentRoot + 'emojify/src/images/emoji',  // Directory for emoji images
                ignored_tags     : {                // Ignore the following tags
                    'SCRIPT'  : 1,
                    'TEXTAREA': 1,
                    'A'       : 1,
                    'PRE'     : 1,
                    'CODE'    : 1
                }
            });
            emojify.run();
            element.$$element[0].innerHTML = emojify.replace(element.$$element[0].innerHTML);
        },
        controller: function($scope, $rootScope, $element){
            var init = function(){
                $scope.showEmojiPanel = false;
            }

            $scope.toggleEmoji = function(){
                $scope.showEmojiPanel = !$scope.showEmojiPanel;
            }

            $scope.addEmoji = function(emojiCode){
                $rootScope.$broadcast('emji:addSuccess', emojify.replace(emojiCode), $scope.inputName);
            }

            init();
        }
    }
});