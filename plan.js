// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Created by BigC@2016, Credit to DA Man Gor

var PlanDownloader = (function() {
    
    var theSnippedURL = location.href.match(/([0-9]|[a-f]){32}/g);
     if(window.location.href.indexOf("inspectionPlan?imageId") > -1)
		{window.open('https://bravo.bd.gov.hk/getInspectionPlanImage?imageId='+theSnippedURL);
	    setTimeout(window.close(),5000);}
			else
				{if(window.location.href.indexOf("inspectionDocument") > -1)
				{feed = confirm("Download Report? 50~100 pages are limited");
					if( feed === false)
					{prompt("URL:",'https://bravo.bd.gov.hk/getInspectionDocumentImage?imageId='+theSnippedURL+'&pageNo=*');}
					else
						{var a = prompt("Start From Which Page","Please input a number");
						 var b = prompt("Finish in Which Page","Please input a number");
						for(a > 0; parseInt(a)  <= parseInt(b); a++)
						{window.open('https://bravo.bd.gov.hk/getInspectionDocumentImage?imageId='+theSnippedURL+'&pageNo='+a);
						setTimeout(window.close(),5000);}
						confirm("Download Reports Completed, Please Wait Until All Tab CLosed.");
	      }}
	      else
	      {}
	    }
    })();