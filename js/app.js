angular.module('imgurDownloader', [], function ($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
});

