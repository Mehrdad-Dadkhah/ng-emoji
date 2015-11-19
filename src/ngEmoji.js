var app = angular.module('ngEmoji' , []);

var documentRoot = 'http://test.local/src/';

app.directive('emoji', function() {
    return {
        templateUrl: documentRoot + 'emoji.html',
        restrict: 'E',
        scope:{
            inputModel: '@',
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
        controller: function($scope, $element){
            var init = function(){
                $scope.$parent[$scope.inputName] = [];
                $scope.$parent[$scope.inputName][$scope.inputModel] = '';
                $scope.showEmojiPanel = false;
            }

            $scope.toggleEmoji = function(){
                $scope.showEmojiPanel = !$scope.showEmojiPanel;
            }

            $scope.addEmoji = function(emojiCode){
                var text = $scope.$parent[$scope.inputName][$scope.inputModel];
                $scope.$parent[$scope.inputName][$scope.inputModel] = text+emojify.replace(emojiCode);
            }

            init();
        }
    }
});