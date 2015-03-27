var _ = require('underscore');
var helpers = require('../../lib/helpers');

exports.schemaStructure = {
    title: String,
    subtitle: String,
    author: String,
    createdOn: Date,
    chapter: String,
    page: Number
};


var addTestPage = function(Page) {
    var testPage = new Page({
        title: "Test Page",
        subtitle: "This is the first test page",
        author: "Test User",
        createdOn: Date.now(),
        chapter: "test",
        page: 1
    });
    console.log(testPage);

    testPage.save(function(err, testPage){
    	if(err) return console.log(err);
    	else{
    		console.log(testPage.title + " was created");
    	}
    	
    })

}

exports.getPage = function(opts, callback) {
    var page = opts.page;
    var chapter = opts.chapter;
    var Page = opts.model;
    var noneIsNull = !helpers.hasNull([page, chapter, Page]);

    if (noneIsNull) {
        //addTestPage(page);

        var data = Page.find({
            chapter: chapter,
            page: parseInt(page)
        }, callback);
        return
    }
}