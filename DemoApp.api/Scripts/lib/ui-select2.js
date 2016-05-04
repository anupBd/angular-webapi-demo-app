angular.module("ui.select2",[]).value("uiSelect2Config",{}).directive("uiSelect2",["uiSelect2Config","$timeout",function(a,b){var c={};return a&&angular.extend(c,a),{require:"ngModel",priority:1,compile:function(a,d){var e,f,g,h=a.is("select"),i=angular.isDefined(d.multiple);return a.is("select")&&(f=a.find("option[ng-repeat], option[data-ng-repeat]"),f.length&&(g=f.attr("ng-repeat")||f.attr("data-ng-repeat"),e=jQuery.trim(g.split("|")[0]).split(" ").pop())),function(a,f,g,j){f.bind("select2-removed",function(){b(function(){f.parent().find(".select2-choices").find(".select2-search-choice").last().addClass("select2-search-choice-focus")},100)});var k=angular.extend({},c,a.$eval(g.uiSelect2)),l=function(a){var b;return k.simple_tags?(b=[],angular.forEach(a,function(a){b.push(a.id)})):b=a,b},m=function(a){var b=[];return a?(k.simple_tags?(b=[],angular.forEach(a,function(a){b.push({id:a,text:a})})):b=a,b):b};if(h?(delete k.multiple,delete k.initSelection):i&&(k.multiple=!0),j&&(a.$watch(d.ngModel,function(a,b){a&&a!==b&&j.$render()},!0),j.$render=function(){if(h)f.select2("val",j.$viewValue);else if(k.multiple){var a=j.$viewValue;angular.isString(a)&&(a=a.split(",")),f.select2("data",m(a))}else angular.isObject(j.$viewValue)?f.select2("data",j.$viewValue):j.$viewValue?f.select2("val",j.$viewValue):f.select2("data",null)},e&&a.$watch(e,function(a,c){angular.equals(a,c)||b(function(){f.select2("val",j.$viewValue),f.trigger("change"),a&&!c&&j.$setPristine&&j.$setPristine(!0)})}),j.$parsers.push(function(a){var b=f.prev();return b.toggleClass("ng-invalid",!j.$valid).toggleClass("ng-valid",j.$valid).toggleClass("ng-invalid-required",!j.$valid).toggleClass("ng-valid-required",j.$valid).toggleClass("ng-dirty",j.$dirty).toggleClass("ng-pristine",j.$pristine),a}),!h&&(f.bind("change",function(b){b.stopImmediatePropagation(),a.$$phase||a.$root.$$phase||a.$apply(function(){j.$setViewValue(l(f.select2("data")))})}),k.initSelection))){var n=k.initSelection;k.initSelection=function(a,b){n(a,function(a){j.$setViewValue(l(a)),b(a)})}}f.bind("$destroy",function(){f.select2("destroy")}),g.$observe("disabled",function(a){f.select2("enable",!a)}),g.$observe("readonly",function(a){f.select2("readonly",!!a)}),g.ngMultiple&&a.$watch(g.ngMultiple,function(a){g.$set("multiple",!!a),f.select2(k)}),b(function(){f.select2(k),f.val(j.$viewValue),j.$render(),k.initSelection||h||j.$setViewValue(l(f.select2("data")))})}}}}]);