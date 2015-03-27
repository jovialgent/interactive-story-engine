var _ = require('underscore');
var helpers = require('../../lib/helpers');

exports.schemaStructure = {
    titleBar: {
        title: String,
        subtitle: String,
        author: String,
        createdOn: Date,
        chapter: String,
        page: Number
    },

    pageBody : {
    	paragraphs : [
    	{
    		content : String 
    	}
    	]
    }

};


var addTestPage = function(Page) {
    var testPage = new Page({
        titleBar: {
            title: "Test Page",
            subtitle: "This is the first test page",
            author: "Test User",
            createdOn: Date.now(),
            chapter: "test",
            page: 1
        }, 
        pageBody : {
        	paragraphs : [
        		{
        			content : "First Paragraph"
        		},
        		{
        			content : "Second Paragraph"
        		},
        		{
        			content : "Third Paragraph"
        		}

        	]
        }
    });
    console.log(testPage);

    testPage.save(function(err, testPage) {
        if (err) return console.log(err);
        else {
            console.log(testPage.titleBar.title + " was created");
        }

    })

}

exports.getPage = function(opts, callback) {
    var page = opts.page;
    var chapter = opts.chapter;
    var Page = opts.model;
    var noneIsNull = !helpers.hasNull([page, chapter, Page]);

    if (noneIsNull) {
        //addTestPage(Page);

        var data = Page.find({

            "titleBar.chapter": chapter,
            "titleBar.page": parseInt(page)

        }, callback);
        return
    }
}